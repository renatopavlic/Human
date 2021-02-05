import React, { useState } from 'react';
import SuccessMsg from "../SuccessMsg/SuccessMsg";
import "./Form.css";

function Form() {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      { !success ? 
      <form className="form">
      <h4 className="formLabel">Full Name</h4>
      <input type="text" placeholder="Type your name" className="formInput" onChange={ e => setName(e.target.value)} required/>
      <h4 className="formLabel">Work email</h4>
      <input type="text" placeholder="Type your email" className="formInput" onChange={ e => setMail(e.target.value)} required/>
      <h4 className="formLabel">Message</h4>
      <input type="text" placeholder="Type your message" className="formInput myInput" onChange={ e => setMessage(e.target.value)}/>
      <p className="formText">
      Company will use provided information for the purposes of sending the requested information, send product and service promotions and announce company news to you.  Company will maintain a record of data until you revoke the consent that you have given.
      </p>
      <div className="agreeBox">
        <input type="checkbox" name="checkbox" className="formCheckbox" onClick={() => setAgree( value => !value)}/>
        <label for="checkbox" className="formCheckLabel">
          I agree.
        </label>
      </div>
      { agree && name.length > 1 && mail.length > 1 && message.length > 1 ? 
      <button type="submit" className="formBtn" onClick={() => setSuccess(true)}>send message</button> 
    :
    ""}
      
    </form>
    :
    <SuccessMsg />
      }
      
    </>
  )
}

export default Form;
