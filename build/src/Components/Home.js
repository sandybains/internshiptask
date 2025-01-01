import React from 'react'
import "./Home.css"
import Image from "../New folder/image.jpg"
import Carousel from './Carousel'
import Contact from './Contact'
import OurService from './OurService'
import Footer from "./Footer"; 
import Feedback from './Feedback'
import Products from "./Products"
const Home = () => {
  return (
    <>
    <div className='parent-home'>
      <div className='home-text'>
        <center>
  <h1>Simplify Complexity</h1>
    <h2>& Amplify Results</h2>
    <div className='line'></div>
     <p>Growth with consultative next-gen AI solutions, marketing strategies,<br></br>
     and expert HubSpot services for today's fast-moving businesses</p><br></br>
     <button className='button-home'>Let's Talk Now</button>
     </center>
      </div>
    </div>
    
    <div className='chlid-1'>
<div className='child-head'>
    <h1>The Growth Playbook: 5 Wives and 1 Husband</h1>
    <p className='child-head-1'>Because answers drive results.</p>
    <p>At Nexveda, the 5 Wives and 1 Husband aren't for drama—they're for direction. We lay it all out: <br></br>
who, what, when, where, why, and how. The result? Clarity that simplifies complexity and <br></br>
accelerates your growth.</p>
<div className='button-line'>
      {['Who', 'What', 'When', 'Where', 'Why', 'How'].map((buttonText) => (
        <button key={buttonText}>{buttonText}</button>
      ))}
    </div>
</div>
    </div>

<div className='image-flex'>
    <div className='image-flex-a'>
        <p>Businesses looking for smarter AI, <br/>
        marketing, and HubSpot solutions</p>
        <img  className="image-size" src={Image}/>
    </div>
</div>
<OurService/><br/><br/><br/><br/><br/>
<Products/><br/>
<Feedback/><br/>
<Carousel/><br/>
<Contact/><br/>
<Footer/>
    
    </>
  )
}

export default Home
