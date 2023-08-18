import React from "react";
import { Link } from "react-router-dom";

const Manu = (props) => {
    let isloggedIn = props.isloggedIn
    let setIsloggedIn = props.setIsloggedIn
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <nav className="flex justify-between py-4 items-center">
        <ul className="md:flex gap-5 text-white hidden">
          <li>
            <Link to={"/Study_Notion_App"}>Home</Link>
          </li>
          <li>
            <Link to={"/Study_Notion_App"}>About</Link>
          </li>
          <li>
            <Link to={"/Study_Notion_App"}>Contact</Link>
          </li>
        </ul>

        <div className="md:flex gap-5 text-white hidden">
          {!isloggedIn && (
            <Link to={"/login"}>
              <button className="ring-1 px-4 py-2 rounded-md bg-slate-800">
                Login
              </button>
            </Link>
          )}
          {!isloggedIn && (
            <Link to={"/Study_Notion_App/signup"}>
              <button className="ring-1 px-4 py-2 rounded-md  bg-slate-800">
                Sign Up
              </button>
            </Link>
          )}
          {isloggedIn && (
            <Link to={"/Study_Notion_App"}>
              <button
                className="ring-1 px-4 py-2 rounded-md  bg-slate-800"
                onClick={() => {
                  setIsloggedIn(false);
                  toast.success("Logged Out");
                }}>
                LogOut
              </button>
            </Link>
          )}
          {isloggedIn && (
            <Link to={"/Study_Notion_App/dashboard"}>
              <button className="ring-1 px-4 py-2 rounded-md  bg-slate-800">
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Manu;
