import React, { useContext, useState } from "react";
import logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaBars } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import Manu from "./Manu";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const [hamburgerIconActive, setHamburgerIconActive] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <nav className="flex justify-between py-4 items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className="md:flex gap-5 text-white hidden">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>

        <div className="md:flex gap-5 text-white hidden">
          {!isLoggedIn && (
            <Link to={"/login"}>
              <button className="ring-1 px-4 py-2 rounded-md bg-slate-800">
                Log in
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to={"/signup"}>
              <button className="ring-1 px-4 py-2 rounded-md  bg-slate-800">
                Sign Up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to={"/"}>
              <button
                className="ring-1 px-4 py-2 rounded-md  bg-slate-800"
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}>
                LogOut
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to={"/dashboard"}>
              <button className="ring-1 px-4 py-2 rounded-md  bg-slate-800">
                Dashboard
              </button>
            </Link>
          )}
          {
            isLoggedIn && 
            (<NavLink to={"/profile"}>
              <div className="h-12 w-12 ml-4">
                <img
                  className="object-cover w-full h-full overflow-hidden rounded-full"
                  src="https://randomuser.me/api/portraits/med/men/75.jpg"
                  alt="User Profile"
                />
              </div>
            </NavLink>)
          }
        </div>

        {/* mobile manu */}
        {/* <span
          className="text-white text-xl md:hidden"
          onClick={() => setHamburgerIconActive((prev) => !prev)}>
          {hamburgerIconActive ? (
            <>
              <HiMiniXMark fontSize={30} />
              <Manu isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn} />
            </>
          ) : (
            <FaBars />
          )}
          {}
        </span> */}
      </nav>
    </div>
  );
};

export default Navbar;
