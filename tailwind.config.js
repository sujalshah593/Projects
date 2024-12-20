import { plugin } from "postcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: [
    "./src/**/*.{.js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: [' "Dancing Script" ', 'cursive'],
      },
    },
  },
  plugin: []
}