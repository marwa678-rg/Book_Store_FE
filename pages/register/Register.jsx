import React, { useState } from 'react'
import { useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
//endPoint => accept email & password


export const Register = () => {
const emailRef = useRef();
const passwordRef=useRef();
const[hidepass,setHidePass] = useState(true);

function handlePass(){
setHidePass(prev=>!prev);
}
async function handleRegister(e){
  ev.preventDefault();
  try {
    //Data
    const data = {
      email:emailRef.current.value,
      password:passwordRef.current.value,
    };
    //call End point
  

  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='container'>
      <h1>Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className='mb-4'>
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <InputGroup className='mb-3'>
          <Form.Control 
          type="email" 
          id="email" 
          name="email" 
          placeholder='name@example.com' 
          ref={emailRef}>
          </Form.Control>
          <InputGroupText> <MdAlternateEmail /> </InputGroupText>
           </InputGroup>
        </Form.Group>

      <Form.Group className='mb-4' >
          <Form.Label htmlFor='password'>Password:</Form.Label>
          <InputGroup className='mb-3'>
            <Form.Control 
          type={hidepass? "password":"text"}
          id="password" 
          name="password" 
          ref={passwordRef}>
          </Form.Control>
      <InputGroupText  style={{cursor:"pointer"}} onClick={handlePass} >{hidepass? <FaEyeSlash />:<FaEye /> } </InputGroupText>
      </InputGroup>
        </Form.Group >
      <Button type="submit" className='Btn btn-primary btn-lg  mt-3'>Register</Button>

    </Form>



    </div>
  )
}
