import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const[firstName,setFirstName]=useState()
  const[lastName,setLastName]=useState()

  const{createUser, signUpGoogle}=useContext(AuthContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const displayName=`${firstName} ${lastName}`
    createUser(email,password,displayName)
  }
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className="form-container mt-[5vh] w-[380px] h-[580px]"
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              class=" peer"
              placeholder=" "
              required
              onChange={(e)=>setFirstName(e.target.value)}
            />
            <label htmlfor="floating_text" className="">
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              class=" peer"
              placeholder=" "
              required
              onChange={(e)=>setLastName(e.target.value)}
            />
            <label htmlfor="floating_text" className="">
              Last Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class=" peer"
              placeholder=" "
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlfor="floating_email" className="">
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class=" peer"
              placeholder=" "
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
            <label htmlfor="floating_password" className="">
              Passwod
            </label>
          </div>
          <button type="submit" className="btn-danger" >Register</button>
          <button type="button" className="btn-danger flex justify-between text-center" onClick={()=>signUpGoogle()} >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
