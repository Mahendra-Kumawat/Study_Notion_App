import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const SignUpForm = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    conformPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { loginData, setLoginData, setCrUserLoggedIn, setCurrentObject } =
    useContext(AppContext);

  // signUp function

  function signUp(formdata) {
    setCurrentObject(formdata)
    let a = loginData.some((data) => {
      return data.email === formdata.email;
    });
    if (a) {
      toast.error("Email Already exits please Login");
    } else {
      setLoginData((prev) => {
        return [...prev, formdata];
      })
      setCrUserLoggedIn(formdata.firstName)
      toast.success("Account Created");
      setIsLoggedIn(true);
      navigate("/dashboard");
    }

  }

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

    if (formData.createPassword === formData.conformPassword) {
      signUp(formData);
    } else {
      toast.error("password does not match");
    }
  }

  return (
    <div>
      <div className="bg-slate-800 rounded-full w-[220px] py-[4px] flex px-1 justify-center text-white ring-1 mb-8 gap-1">
        <button className="bg-slate-900 py-3 px-4 rounded-full w-1/2">
          Student
        </button>
        <button className="selection:bg-slate-900 py-3 px-4 rounded-full w-1/2">
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex space-x-4">
          <label>
            <p className=" text-white">
              First Name <sup className="text-red-600 text-lg">*</sup>
            </p>
            <input
              className="w-full py-3 ring-1 px-4 rounded-md placeholder:text-lg bg-slate-950 focus:border-2 focus:border-orange-400 focus:outline-none text-white text-md"
              required
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
            />
          </label>

          <label>
            <p className=" text-white">
              {" "}
              Last Name <sup className="text-red-600 text-lg">*</sup>
            </p>
            <input
              className="w-full py-3 ring-1 px-4 rounded-md placeholder:text-lg bg-slate-950 focus:border-2 focus:border-orange-400 focus:outline-none text-white text-md"
              required
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="my-3">
          <label>
            <p className="text-white">
              {" "}
              Email Address <sup className="text-red-600 text-lg">*</sup>
            </p>
            <input
              className="w-full py-3 ring-1 px-4 rounded-md placeholder:text-lg bg-slate-950 focus:border-2 focus:border-orange-400 focus:outline-none text-white text-md"
              required
              type="email"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="flex space-x-4">
          <label className="relative">
            <p className=" text-white">
              Create Password <sup className="text-red-600 text-lg">*</sup>
            </p>
            <input
              className="w-full py-3 ring-1 px-2 pr-12 rounded-md placeholder:text-lg bg-slate-950 focus:border-2 focus:border-orange-400 focus:outline-none text-white text-md"
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter email address"
              name="createPassword"
              value={formData.createPassword}
              onChange={changeHandler}
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-2xl absolute right-3 bottom-[15px] text-white cursor-pointer">
              {showPassword ? <BiHide /> : <BiShow />}
            </span>
          </label>

          <label className="relative">
            <p className=" text-white">
              Confirm Password <sup className="text-red-600 text-lg">*</sup>
            </p>
            <input
              className="w-full py-3 ring-1 px-2 pr-12 rounded-md placeholder:text-lg bg-slate-950 focus:border-2 focus:border-orange-400 focus:outline-none text-white text-md"
              required
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="conformPassword"
              value={formData.conformPassword}
              onChange={changeHandler}
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="text-2xl absolute right-3 bottom-[16px] text-white cursor-pointer">
              {showConfirmPassword ? <BiHide /> : <BiShow />}
            </span>
          </label>
        </div>

        <div>
          <button className="w-full ring-1 bg-yellow-400 mt-8 mb-4 rounded-lg px-4 py-2">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
