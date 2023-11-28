import React, { useContext, useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import {useNavigate} from "react-router-dom"
import { RecipeContext } from "../../App";


const Login = () => {
  // const[name,setName]=useState("")
  // const[pass,setPass]=useState("")
  const {name,pass,setPass,setName}=useContext(RecipeContext)
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem("username",name)
    localStorage.setItem("password",pass)
    navigate("/home")
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Clarusway/>"}Recipe</Header>

        <StyledForm onSubmit={handleSubmit} >
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e)=>setName(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e)=>setPass(e.target.value)}
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
