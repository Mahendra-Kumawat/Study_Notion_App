import React from 'react'
import Template from '../components/Template'
import signupImage from '../assets/signup.png'
import {SignupFormData} from '../../data'

const SignUp = () => {
  return (
    <div>
      <Template
        {...SignupFormData}
        image={signupImage}
      />
    </div>
  );
};

export default SignUp;
