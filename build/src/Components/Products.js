import React, { useState } from 'react';
import './Products.css'; 
import OurService from "./OurService"
import Footer from './Footer';

const productCards = [
  {
    id: 1,
    title: 'Science and artificial intelligence technology',
    description: 'AI, Machine learning, Hands of robot and human touch on big data network.',
    image:  'https://media.istockphoto.com/id/1779586389/photo/ai-machine-learning-hands-of-robot-and-human-touch-on-big-data-network-brain-data-creative-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=jv9cwtG9ut6iUh5vz4UZpfaVuE58JSkaNQmLD7mXO2c=',
    price: '$249/month'
  },
  {
    id: 2,
    title: 'Data analysis AI technology',
    description: 'Data analysis science and big data with AI technology. Analyst or Scientist uses a computer  information  on computer.',
    image: 'https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=IIZaVsQl6mMcOPgyPrVm8ZlCSBwKdwWju4TTnM7BM4Q=',
    price: '$399/month'

  },
  {
    id: 3,
    title: 'intelligent decisions',
    description: 'Businessman holding data science icon global structure, networking and data analytics, machine learning, ai connection',
    image:  'https://media.istockphoto.com/id/2055558336/photo/businessman-holding-data-science-icon-global-structure-networking-and-data-analytics-machine.jpg?s=612x612&w=0&k=20&c=DBQ2zPs8xf7AbDIvSQrc38bHxeXRjMok-tL2zOEBf8Q=',
    price:  '$349/month'

  },
  {
    id: 4,
    title: 'Automation data analytic Robot',
    description: 'Automation data analytic with robot and digital visualization for big data scientist stock photo',
    image: 'https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.webp?a=1&b=1&s=612x612&w=0&k=20&c=2iILS0WPh_D-MDMJiIw_14bg6IgJarMUYtDH4D0nIho=',
    price: '$199/month'

  },
  {
    id: 5,
    title: 'AI Chatbot',
    description:  'Our AI-powered chatbot offers 24/7 customer support and enhances user engagement.',
    image: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D',
    price: '$349/month'

  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;
  const totalCards = productCards.length;

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <>
    <div className="product-page">
      <h1 className="heading"> Products</h1>
      <div className="carousel">
        <button className="arrow left-arrow" onClick={prevCards} aria-label="Previous">
          ←
        </button>
        <div className="cards-container">
          {Array.from({ length: cardsToShow }).map((_, i) => {
            const index = (currentIndex + i) % totalCards;
            return (
              <div key={productCards[index].id} className="card">
                <img src={productCards[index].image} alt={productCards[index].title} />
                <h3>{productCards[index].title}</h3>
                <p>{productCards[index].description}</p>
                <p className="price">{productCards[index].price}</p>
                <button className="btn">Add to Cart</button>
              </div>
            );
          })}
        </div>
       
        <button className="arrow right-arrow" onClick={nextCards} aria-label="Next">
          →
        </button>
      </div>
    </div><br/>
   
    </>
  );
};

export default Products;