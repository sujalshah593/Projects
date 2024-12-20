import React from "react";
import { CgProfile } from "react-icons/cg";
const Navbar2 = () => {
    return(
        <nav className="flex justify-around bg-purple-900 text-white py-2 shadow-2xl">
            <div className="logo">
                <span className="font-bold text-xl mx-8 ">TaskNest</span>
            </div>
            <ul className="flex gap-8 mx-9">
                <li className="cursor-pointer hover:font-bold transition-all duration-75">Home</li>
                <li className="cursor-pointer hover:font-bold transition-all duration-75">Your Tasks</li>
                <li className="cursor-pointer pt-1"><CgProfile /></li>
            </ul>
        </nav>
    );
}
export default Navbar2