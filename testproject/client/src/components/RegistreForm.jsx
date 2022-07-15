import React from "react";
import { ReactDOM } from "react";
import FormHeader from "./FormHeader";
import { useEffect } from "react";
import OtherMethods from "./OtherMethods"
import { useState } from "react";
import Axios from "axios";
import FormButton from "./FormButton";
import FormCreateAccount from "./FormCreateAccount";


function RegistreForm(){
 
       
  
  const [nameCreation, setname] = useState("");
  const [passwordCreation, setpassword] = useState("");
  const [emailCreation, setemail] = useState("");
  const addToDB = () =>{
    Axios.post("http://localhost:3001/insert",{
      nameCreation:nameCreation,
      passwordCreation:passwordCreation,
      emailCreation:emailCreation
    })
  }
    return(
      
      <div id="loginform">
        <FormHeader title="Create Account" />
        <div class="row">
    
    
    <label>Username</label>
    <input type="text" placeholder="Type Your Username" id="accUsername" onChange={(event) => {
            setname(event.target.value);
          }} required/>
    <label>Password</label>
    <input type="password" placeholder="Type Your Password" id="accPassword"onChange={(event) => {
            setpassword(event.target.value);
          }} required/>
    <label>email</label>
    <input type="email" placeholder="Type Your Email" id="accEmail"onChange={(event) => {
            setemail(event.target.value);
          }} required/>
  </div> 
  
  <div id="button" class="row">
    <button onClick={addToDB}>{"Register"}</button>
    </div>
  
        <OtherMethods />
      </div>
      
    )
  
  }


export default RegistreForm;