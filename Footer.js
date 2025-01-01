import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <section>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13718.490298246668!2d76.68372170380809!3d30.72900919337319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee4948c8c91d%3A0x9b293b77f9002145!2sBalongi%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1735713226098!5m2!1sen!2sin"
width="100%" 
height="350" 
loading="lazy"
></iframe>
</section>
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-info">
          <h1>COMPANY</h1><br/>
          <div className="footer-page">
          <a  href="/">HOME</a><br/>
          <a href="/contact">Contact US</a><br/>
          <a href="/our-service">OUR Service</a>
          <a  href="#">Refund Policy
          </a><br/>
          </div>
          </div>
          <div className="footer-info">
          <h1>OTHER LINK</h1><br/>
          <div className="footer-page">
          <a  href="#">User Guidlines</a><br/>
          <a href="#">Site Map</a><br/>
          <a href="#">Legal Notices</a>
          </div>
          </div>
          <div className="footer-info">
          <h1  style={{marginTop:"36px"}}>NEWS LETTER</h1><br/>
          <div className="footer-page">
         <p>Lorem Ipsum is simply dummy text of<br/>the printing and typesetting industry.</p>
         <div>
            <label>
                <input type="email" placeholder="Enter your email"></input>
            </label>
         </div>
         <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/sandeep_bains_16/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/sandeep-kumar-bains-2a0239231/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
          </div>
          </div>
        
       
      </div>
    </footer>
    </>
  );
};

export default Footer;
