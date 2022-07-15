import React from "react";
import { ReactDOM } from "react";
import FormHeader from "./FormHeader";
import { useEffect } from "react";
import OtherMethods from "./OtherMethods"
import { useState } from "react";
import Axios from "axios";
import FormButton from "./FormButton";
import FormCreateAccount from "./FormCreateAccount";
function LoginForm ()
{
       
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
      
      return(
        
        <div id="loginform">
          <FormHeader title="Login" />
          <div class="row">
      
      
      <label>Username</label>
      <input type="text" onChange={(event) => {
            setname(event.target.value);
          }} placeholder="Type Your Username" required/>
      <label>Password</label>
      <input type="password" onChange={(event) => {
            setpassword(event.target.value);
          }} placeholder="Type Your Password" required/>
    </div> 
    
    <FormButton title="Log in"/>
    <FormCreateAccount/> 
          <OtherMethods />
        </div>
        
      )
    }
    

export default LoginForm;