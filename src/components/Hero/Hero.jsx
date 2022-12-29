import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'

const Hero = () => {
  // motion step 1
  // define the state of the transitions
  const transition = {type:'spring', duration : 3}
  const mobile = window.innerWidth <= 786 ? true : false

  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
       <div className="left-hero">
            <Header/>
            {/* Animated Motto */}
            <div className="motto">
              {/* using motion to make animations */}
              <motion.div
              initial = {{left: mobile ? '160px': '200px'}}
              whileInView = {{left: '8px'}}
              transition = {{...transition, type:'tween'}}
              ></motion.div>
              <span>The best fitness club in town</span>
            </div>
            <div className="hero-text">
              <div><span className='stroke-text'>Shape </span><span>Your</span></div>
              <div><span>Ideal Body</span></div>
              <div><span>We will help you to build your ideal body and shape your life to the fullest</span></div>
            </div>
            {/* animated figures start*/}
            <div className="figures">
              <div>
                <span>
                  {/* number counter animation */}
                  <NumberCounter 
                    start={90}
                    end={140} 
                    delay = '4'
                    postFix ='+'
                  />
                </span>
                <span>Expert coaches</span>
              </div>
              <div>
                <span>
                  <NumberCounter 
                    start={800}
                    end={966} 
                    delay = '5'
                    postFix ='+'
                  />
                </span>
                <span>members joined</span>
              </div>
              <div>
                <span>
                  <NumberCounter 
                    start={0}
                    end={50} 
                    delay = '4'
                    postFix ='+'
                  />
                </span>
                <span>fitness programs</span>
              </div>
            </div>
            {/* animated figures end */}
            {/* Hero Button Start */}
            <div className="hero-btn">
              <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
            </div>
            {/* Hero Button Ends */}
       </div>
       {/* Right Hero Heading */}
       <div className="right-hero">
          <button className='btn'>Join Now</button>
          <motion.div 
          initial  = {{right:'-1rem'}}
          whileInView={{right:"4rem"}}
          transition={transition}
          className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart rate</span>
            <span>112 bpm</span>
          </motion.div>
          {/* Hero Images Start */}
          <img src={hero_image} alt="" className='hero-img'/>
          <motion.img
          initial = {{right:"11rem"}}
          whileInView = {{right:"20rem"}}
          transition = {transition}
          src={hero_image_back} alt="" className='hero-img-back'/>
          {/* Hero Images Ends */}
          <motion.div 
          initial = {{right: "37rem"}}
          whileInView = {{right:"28rem"}}
          transition = {transition}
          className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>210 Kcal</span>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default Hero