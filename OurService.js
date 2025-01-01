


import React from 'react';
import "./Ourservice.css";
import image from "../New folder/AI-generator-tool.jpg"
import inovator from "../New folder/imagea.png"
const OurService = () => {
  return (
    <>
    <div className="the-section">
     
      <div className="service">
        <div className="service-section">
          <h1>Our Services</h1>
          <hr className="divider" />
        </div>

        <div className="new-section">
          <div className="solutions">
            <p>1</p>
          </div>
          <div className="solutions-1">
            <h2>AI Solutions</h2>
            <p>AI for businesses ready to set the pace, not follow it.</p>
            <p>AI Consulting: Strategies that turn data into decisions.</p>
            <p>AI School: Build a workforce fluent in AI.</p>
            <p>AI Upskilling: Turn your team into tech-savvy trailblazers.</p>
          </div>
          <div className="solutions">
            <p>2</p>
          </div>
          <div className="solutions-1">
            <h2>Growth Marketing</h2>
            <p>Marketing built for game-changers and boundary-breakers.</p>
           
          </div>
          <div className="solutions">
            <p>3</p>
          </div>
          <div className="solutions-1">
            <h2>Hub Spot Expertise</h2>
            <p>HubSpot solutions that don't just work—they wow.</p>
           
          </div>
        </div>
      </div>

  
      <div className="the-img">
        <img  src={image}></img>
        
      </div>
    </div>
    <div className='innovators'>
    <div className='the-innovators'>
        <h1>We are <br/>Innovators</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and <br/>
typesetting industry. Lorem Ipsum has been the industry's <br/>
standard dummy text ever since the 1500s, when an unknown <br/>
printer took a galley of type and scrambled it to make a type </p><br/>
<button>Let's Talk Now</button>
    </div>
    <div className='the-innovators'>
        <img src={inovator}></img>
        </div>
</div>
    </>
  );
};

export default OurService;