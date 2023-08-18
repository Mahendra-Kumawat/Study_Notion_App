import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const LoginForm = () => {
  const { setIsLoggedIn, loginData } = useContext(AppContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);


  // login function
  function login(formdata) {
    loginData.some(
      (data) =>
        data.email === formdata.email && data.password === formdata.password
    ) ? (
      <div>
        {toast.success("Logged In")}
        {navigate("/Study_Notion_App")}
        {setIsLoggedIn(true)}
      </div>
    ) : (
      <div>{toast.error("Not LoggedIn Pls SignUp")}</div>
    );
  }

  console.log(loginData);

  function changeHandler(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("form Data");
    console.log(formData);

    login(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <p className="text-white text-lg py-1">
            Email Address <sup className="text-red-600">*</sup>
          </p>
          <input
            className="w-full py-3 ring-1 px-4 rounded-md placeholder:text-lg bg-slate-950 focus:border-2 focus:border-orange-400 focus:outline-none text-white text-md"
            type="email"
            placeholder="Enter email address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </label>

        <label className="relative">
          <p className="py-1 mt-2 text-white text-lg">
            Password <sup className="text-red-600">*</sup>
          </p>
          <input
            className="w-full py-3 ring-1 px-4 rounded-md placeholder:text-lg bg-slate-950 focus:border-2 focus:border-orange-400 focus:outline-none text-white text-md"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-2xl absolute right-4 -bottom-1 cursor-pointer text-white">
            {showPassword ? <BiHide /> : <BiShow />}
          </span>
        </label>

        <p className="text-right text-xs text-blue-300 pt-2 cursor-pointer">
          Forgot Password
        </p>

        <button className="w-full ring-1 bg-yellow-400 mt-8 mb-4 rounded-lg text-lg px-4 py-2  transition-all duration-150 hover:bg-yellow-500">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
