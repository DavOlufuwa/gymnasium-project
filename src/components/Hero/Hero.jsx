import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className='hero'>
       <div className="left-hero">
            <Header/>
            {/* Animated Motto */}
            <div className="motto">
              <div></div>
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
                <span>140+</span>
                <span>Expert coaches</span>
              </div>
              <div>
                <span>978+</span>
                <span>members joined</span>
              </div>
              <div>
                <span>50+</span>
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
          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart rate</span>
            <span>112 bpm</span>
          </div>
          {/* Hero Images Start */}
          <img src={hero_image} alt="" className='hero-img'/>
          <img src={hero_image_back} alt="" className='hero-img-back'/>
          {/* Hero Images Ends */}
          <div className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>210 Kcal</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero