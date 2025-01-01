import React, { useState } from 'react';
import "./Contact.css"
import Footer from './Footer';
const Contact = () => {
  const [contact,setContact]=useState({
    username:"",
    email:'',
    message:'',
  });
const handleInput=(e)=>{
 const{name,value}=e.target;
  setContact({
    ...contact,
    [name]:value,
  });

}


const handleSubmit=async(e)=>{
  e.preventDefault();
  try{ 
    const response = await fetch ("http://localhost:8090/contact",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(contact)
  });
  if(!response.ok){
    alert("Error sending  message. please try again.")
  } else {
    alert("message sent successfully!");
    setContact ({username:"",email:"", message:""});
  }
 } catch {
     alert("An error occured. Please try agin later.")
  }

}
  return (
    <>
    
  <div className='tabledata'>
<section className='section-contact'>
<div className='contact-content container'>
    <h1 className='main-heading'>CONTACT US</h1>
  </div>
<div className='container grid grid-two-cols'>
<div className='contact-text'>
<h1>The form that starts smarter growth.</h1>
<p>Let's turn your ideas into action.<br/>
Whether it's AI, marketing, or HubSpot mastery,
we're ready to simplify the complex and supercharge
your growth.<br/>
Drop us a line, and let's make it happen!</p>
<img  style={{borderRadius:"20rem"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TdPb2CEUrJYw-HahvY7oC5V4-mSGxwxdIg&s' alt='ai-image'></img>
</div>

<section className='section-form'>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor='username'>Username</label>
      <input 
      type='text'
       name='username'
       placeholder='Enter your username'
        id='username'
        autoComplete='off'
        onChange={handleInput}

         required />
    </div>


    <div>
      <label htmlFor='email'>Email</label>
      <input 
      type='text'
      placeholder='Enter email'
       name='email'
        id='email'
        onChange={handleInput}

        autoComplete='off'
         required />
    </div>
    <div>
      <label htmlFor='message'>Message</label>
      <input
       name='message'
       type="text"
       placeholder='Enter your message'
        id='message'
        autoComplete='off'
        onChange={handleInput}
        cols="30" 
        rows="6">

        </input>
    </div>
    <div>
      <input type='submit'></input>
    </div>
  </form>
</section>
</div>
</section>

  </div><br/>
  


    
    </>
  );
};

export default Contact;
