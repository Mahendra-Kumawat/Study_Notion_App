import React from "react";
import Template from "../components/Template";
import loginImage from '../assets/login.png'
import {loginData} from '../../data'

const Login = () => {
  return (
    <div>
      <Template
        {...loginData}
        image = {loginImage}
      />
    </div>
  );

};

export default Login;
