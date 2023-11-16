import React, { useState } from "react";

const ContactForms = () => {
    const[name, setName]=useState("")
    const[pass, setPass]=useState("")
    const[country, setCountry]=useState("")
    const handleSubmit=()=>{
        alert(`
        Name:${name} 
        Password:${pass} 
        Country:${country}`) 
    }

  return (
    <div className="container text-center mt-4">
      <h1>************************************</h1>
      <h1>FORMS (EVENTS)</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username">
            USERNAME: <span className="text-danger fw-bold">{name}</span>
          </label>
          <input type="text" id="username" className="form-control" onInput={(e)=>setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" className="form-control" onChange={(e)=>setPass(e.target.value)} />
        </div>
        <div>
          <label htmlFor="country" className="form-label">
            COUNTRY: <span className="text-danger fw-bold">{country}</span>
          </label>
          <select className="form-select" onChange={(e)=>setCountry(e.target.value)}>
            <option selected value="" hidden
            >Countries</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForms;
