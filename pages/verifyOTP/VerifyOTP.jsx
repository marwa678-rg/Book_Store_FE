
import React, { useRef } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import { MdEmail } from "react-icons/md";
export const VerifyOTP = () => {
const emailRef= useRef();
//End-Point=> verify (OTP+ Email)
async function handleVerifyOTP(ev){
  ev.preventDefault();
 

  try {
  //DATA
    const data = {email:emailRef.current.value,OTP};
    //TODO:Implement OTP 
    //const response= await api.

  } catch (error) {
    
  }
}




  return (
 
    <Container className='d-flex flex-column  align-items-center justify-content-center min-vh-100'>
      <Card style={{width:"100%",maxWidth:"450px" }} className='border-0  shadow'>
        <Card.Body className="text-center p-4">
          <MdEmail size={60} className='text-primary mb-3  '/>
            <Card.Title className="bm-2">
              Verify Your Email
            </Card.Title>
            <Card.Text className="text-muted mb-4">
            Enter the 6-digit code sent to your email
              </Card.Text>
        <Form onSubmit={handleVerifyOTP}>
          <Form.Control type="text"
          placeholder='Enter OTP'
          maxLength={6}
          className='text-center mb-3 fs-5'
          ref={emailRef}
          >
          </Form.Control>


          <Button className="w-100 mb-3" variant="primary">
           verify
          </Button>
        </Form>

        {/* Resend route */}
        <div className='text-muted'>
            Didn't recieve code ? {' '}   
            <span>Resend</span>
        </div>





        </Card.Body>
      </Card> 
  
    



</Container>
  )
}
