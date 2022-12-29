import React from 'react'
import { useRef } from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import {Link} from "react-scroll"
import {motion} from 'framer-motion'

const Join = () => {
    const transition = {type:'spring', duration : 3}
    // Using EmailJS in the ReactApp
    const form = useRef()
    const [alertStatus, setAlertStatus] = useState({alertbox:"closed",errorMessage:"failure"})
    const switchOff = ()=>{
        setAlertStatus({
            ...alertStatus, 
            alertbox:"closed", 
            errorMessage:"failure"
        }); 
        window.location.reload()}
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_glvbu1v', 'template_sieaqte', form.current, 'x9jmuUxk4g244i6Wi')
          .then((result) => {
              console.log(result.text);
                setAlertStatus({...alertStatus, alertbox:"opened", errorMessage:"success"})
          }, (error) => {
                setAlertStatus({...alertStatus, alertbox:"opened",errorMessage:"failure"})
              console.log(error.text);
          });

      };
    // Using EmailJs in the ReactApp ends
    
  return (
    <div className={alertStatus ? "Join hook": "Join"} id="Join-us">
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
                <input type="email" name="user_email" id="" placeholder='Enter your email address' required/>
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
        <div className={alertStatus.alertbox === "opened" ? "alert-container open" : "alert-container"} id="alert">
            <motion.div 
                className="msg-container"
                initial ={{opacity: 0, y: -100}}
                transition = {{...transition, duration: 1}}
                whileInView = {{opacity: 1, y: 0 }}
                >
                <div className="message-box">
                    {alertStatus.errorMessage === "success" ? "Thank you for signing up. We will speak with you soon": "Sorry there was an error signing up. Please check your internet connection or try again"}
                </div>
                <Link
                    className='btn'
                    onClick={switchOff} 
                    to="alert" 
                    span={true} 
                    smooth={true}>
                    okay
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default Join