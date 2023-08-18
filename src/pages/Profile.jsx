import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Profile = () => {

    const { currentObject, updateUserData } = useContext(AppContext);
 
    const [profileFormData, setProfileFormData] = useState({
      firstName: "",
      lastName : "",
      email : currentObject?.email
    });


    function profileChangeHandler(event){
        setProfileFormData((prev) => {
            return {
                ...prev , 
                [event.target.name] : event.target.value
            }
        })
    }

    function formClickHandler(event){
        event.preventDefault()
        console.log(profileFormData)
        updateUserData(profileFormData , event)
    }
  

  return (
    <div className="text-white py-8 px-8">
      <main className="flex flex-col space-y-12  items-center mx-auto max-w-[1200px]">
        <div className="flex justify-center w-full">
          <h1 className="text-3xl capitalize font-semibold">my profile</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-40 rounded-full"
            src="https://randomuser.me/api/portraits/med/men/75.jpg"
            alt=""
          />
          <p className="text-3xl font-bold capitalize">
            <span>{currentObject?.firstName} </span>
            <span>{currentObject?.lastName}</span>
          </p>
        </div>

        <section className="md:flex md:justify-between w-full">
          <div>
            <p className="text-xl capitalize font-semibold my-3">
              Update Profile Details
            </p>
          </div>
          <div className="md:w-7/12">
            <form
              className="flex flex-col  gap-5 bg-slate-500 px-4 py-4"
              onClick={formClickHandler}>
              <label>
                <p className="py-1">
                  first Name <sup>*</sup>
                </p>
                <input
                  value={
                    profileFormData.firstName
                  }
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="px-4 py-2 w-full"
                  onChange={profileChangeHandler}
                />
              </label>

              <label>
                <p>
                  Email <sup>*</sup>
                </p>
                <input
                  type="email"
                  disabled
                  className="w-full px-4 py-2 cursor-not-allowed"
                  defaultValue={currentObject?.email}
                />
              </label>

              <label>
                <p>
                  lastName <sup>*</sup>
                </p>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2"
                  name="lastName"
                  value={profileFormData.lastName}
                  onChange={profileChangeHandler}
                />
              </label>
              <button className="flex w-1/5 justify-center md:text-xl items-center py-2 px-8 bg-slate-400">
                Save
              </button>
            </form>
          </div>
        </section>

        <section className="md:flex md:justify-between w-full">
          <div>
            <p className="text-xl capitalize font-semibold py-2">
              Change Password
            </p>
          </div>
          <div className="md:w-7/12">
            <form className="flex flex-col gap-5 bg-slate-500 px-4 py-2">
              <label>
                <p className="py-2">
                  Current Password <sup>*</sup>
                </p>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full px-4 py-2"
                />
              </label>

              <label>
                <p className="py-2">
                  New Password <sup>*</sup>
                </p>
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full px-4 py-2"
                />
              </label>

              <label>
                <p className="py-2">
                  Retype new Password <sup>*</sup>
                </p>
                <input
                  type="password"
                  placeholder="Retype new Password"
                  className="w-full px-4 py-2"
                />
              </label>
              <button className="flex w-1/5 justify-center md:text-xl items-center py-2 px-8 bg-slate-400">
                Save
              </button>
            </form>
          </div>
        </section>

        <section className="md:flex md:justify-between w-full">
          <div>
            <p className="text-xl py-2 capitalize font-semibold">
              Delete Profile
            </p>
          </div>
          <div className="md:w-7/12">
            <form className="flex flex-col gap-5 bg-slate-500 px-4 py-4">
              <label>
                <input type="checkbox" name="" id="" />
                <p className="inline-block px-4">
                  I agree to delete my profile
                </p>
              </label>
              <button className="flex w-1/5 justify-center md:text-xl items-center py-2 px-8 bg-slate-400">
                Delete
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
