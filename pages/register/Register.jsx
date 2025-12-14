import React, { useState } from 'react'
import { useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { api } from '../../src/APIs/api';
import toast from 'react-hot-toast';
import { Loading } from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
//endPoint => accept email & password


export const Register = () => {

  //Navigation
const go =  useNavigate();
  //Refs
const emailRef = useRef();
const passwordRef=useRef();
//States
const [hidepass,setHidePass] = useState(true);
const [loading,setLoading]=useState(false);
//Handlers
function handlePass(){
setHidePass(prev=>!prev);
}
async function handleRegister(ev){
  ev.preventDefault();

  setLoading(true);
  try {
    //Data
    const data = {
      email:emailRef.current.value,
      password:passwordRef.current.value,
    };
    //call End point
  const response = await api.post("/api/v1/auth/register",data)
  toast.success(response.data.message);

//navigate to verify email
    go("/verify-otp");



  } catch (error) {
    console.log(error)
    //Handle Error Messages Array
    if(error.response?.data.messages){
error.response?.data.messages.forEach((message)=>{
 toast.error(message);
})
    }else if(error.response?.data.message){

      toast.error(error.response?.data.message)
//default message
    }else{
toast.error("INTERNAL SERVER ERROR")
    }
   
  }finally{
    setLoading(false);
  }
}
if(loading){
  return <Loading />
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
      <Button type="submit"  className='Btn btn-primary btn-lg  mt-3'>Register</Button>

    </Form>



    </div>
  )
}
