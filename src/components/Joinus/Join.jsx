import React from 'react'
import { useRef } from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'

const Join = () => {
    // Using EmailJS in the ReactApp
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_glvbu1v', 'template_sieaqte', form.current, 'x9jmuUxk4g244i6Wi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

      };
    // Using EmailJs in the ReactApp ends
    
  return (
    <div className="Join" id="Join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US ?</span>
            </div>            
        </div>
        <div className="right-j">
            <form  
            ref={form} 
            action="" 
            className="email-container"
            onSubmit={sendEmail}
            >
                <input type="email" name="user_email" id="" placeholder='Enter your email address'/>
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join