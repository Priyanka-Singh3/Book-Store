import React from "react";
import Home from "./home/Home.jsx"
import Courses from "./courses/Courses.jsx"
import Signup from "./components/Signup"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
     <div className="dark:bg-white dark:text-black">
     <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/course" element = {<Courses />} />
      <Route path = "/signup" element = {<Signup />} />
     </Routes>
     </div>
    </>
  );
}

export default App;
