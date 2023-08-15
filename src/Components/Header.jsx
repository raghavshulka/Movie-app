import React from "react";
import "../Components/comp.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";


const Header = () => {
  return (
    <>
    <div className="  p-[1rem] flex  md:items-center justify-between  bg-black    md:h-[100px] md:w-[100%] ">
      <div>
        <nav className="  text-2xl  md:text-5xl f2 text-red-700">
          <Link className="  hover:text-red-800  " to="/">WATCHON</Link>
        </nav>
      </div>
      <div className="   md:flex font md:pl-[100px] md:w-[100%] text-white  ">
        <div className="" >
          <nav className=" hidden md:flex space-x-9  ">
            <Link className="  hover:text-slate-400" to="/Tv_Shows">Tv Shows</Link>
            <Link className="  hover:text-slate-400" to="/Movies">Movies</Link>
            <Link className="  hover:text-slate-400" to="/Recently_Added">Recently Added</Link>
            <Link className="  hover:text-slate-400" to="/My_List">My List</Link>
          </nav>
        </div>
        
      </div>
      <div className=" flex  text-white md:text-2xl font-bold  cursor-pointer ">
          <BsSearch />
        </div>
    </div>
    
</>
  );
};

export default Header;
