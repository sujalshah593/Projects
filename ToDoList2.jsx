import Navbar2 from "./Navbar2";
import { useState, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid';
import { FaEdit } from "react-icons/fa";    
import { MdDelete } from "react-icons/md";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";



function ToDoList2(){

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]) 
    const [showFinished, setshowFinished] = useState(true)
     
    useEffect(() => {
        let todoString = localStorage.getItem("todos");
        if(todoString){
            let todos = JSON.parse(localStorage.getItem("todos"))
            setTodos(todos)
        }
    }, [])

    const saveToLS = (params) => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }

    const toggleFinished = (e) => {
      setshowFinished(!showFinished)
    }
    

    const handleEdit = (e, id) => {
       let t = todos.filter(i=>i.id === id)
       setTodo(t[0].todo);
       let newTodos = todos.filter(item=>{
        return item.id !== id;
        });
        setTodos(newTodos)
        saveToLS();
    }

    const handleDelete = (e, id) => {
        let newTodos = todos.filter(item=>{
            return item.id !== id;
        });
        setTodos(newTodos)
        saveToLS();
        
    }

    const handleAdd = (e) => {
        setTodos([...todos,{id:uuidv4(), todo, isCompleted: false}]);
        setTodo("");
        saveToLS();
        
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleCheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item => {
            return item.id == id;
        })
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos)
        saveToLS();
    }

    const handleMoveUp = (id) => {
        const index = todos.findIndex(item => item.id === id);
        if (index > 0) {
            // Swap the task with the one above
            const newTodos = [...todos];
            const temp = newTodos[index];
            newTodos[index] = newTodos[index - 1];
            newTodos[index - 1] = temp;
            setTodos(newTodos);
            saveToLS();
        }
    }

    const handleMoveDown = (id) =>{
        const index = todos.findIndex(item => item.id === id);
        if(index < todos.length) {
            const newTodos = [...todos];
            const temp = newTodos[index];
            newTodos[index] = newTodos[index+1];
            newTodos[index+1] = temp;
            setTodos(newTodos);
            saveToLS;
        }
    }

    return(
        < >
        <Navbar2/> 
           <div className="mx-3 md:container md:mx-auto my-7 shadow-2xl font-semibold rounded-xl p-5 bg-white text-black min-h-[80vh] md:w-[35%]">
            <h1 className='font-bold text-center text-3xl'>"List It, Do It, Crush It"</h1>
             <div className="addTodo my-5 flex flex-col gap-4">
              <h2 className='text-2xl font-bold'>Add a Todo</h2>
              <div className="flex">
    
              <input placeholder="Enter your Tasks...." onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1 border-2 text-black h-10 border-black placeholder:font-normal' />
              <button onClick={handleAdd} disabled={todo.length<=2} className='bg-purple-600  mx-2 rounded-full hover:scale-110 hover:shadow-lg hover:bg-purple-700 disabled:bg-purple-600 p-4 py-2 text-sm font-bold text-white'>Save</button>
              </div>
             </div>
             <input className='my-4 ' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
             <label className='mx-2' htmlFor="show">Show Finished</label> 
             <div className='h-[1px] bg-black opacity-14 w-[90%] mx-auto my-2'></div>
             <h2 className='text-2xl font-bold'>Your Todos</h2>
             <div className="todos">
              {todos.length ===0 && <div className='m-5'>No Todos to display</div> }
              {todos.map(item=>{
     
              return (showFinished || !item.isCompleted) && <div key={item.id} className={"todo flex my-3 justify-between"}>
                <div className='flex gap-5'> 
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e)=>handleEdit(e, item.id)} className='bg-green-500 hover:bg-green-600 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>
                  <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-red-500 hover:bg-red-600 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><MdDelete /></button>
                  <button onClick={() => handleMoveUp(item.id)} className='bg-purple-700 hover:bg-purple-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaCaretUp /></button>
                  <button onClick={() => handleMoveDown(item.id)} className='bg-purple-700 hover:bg-purple-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaCaretDown /></button>

                </div> 
              </div>
              })}
             </div>
            
           </div>
        </>
    );
}
export default ToDoList2;
