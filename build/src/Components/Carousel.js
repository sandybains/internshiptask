


import React, { useState } from 'react';
import './Carousel.css';

const cards = [
  { id: 1, text: 'intelligent decisions',  image:  'https://media.istockphoto.com/id/2055558336/photo/businessman-holding-data-science-icon-global-structure-networking-and-data-analytics-machine.jpg?s=612x612&w=0&k=20&c=DBQ2zPs8xf7AbDIvSQrc38bHxeXRjMok-tL2zOEBf8Q=', price: '$349/month' },
  { id: 2, text: 'AI Chatbot',  image: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D', price: '$349/month' },
  { id: 3, text: 'Science and artificial intelligence technology',image:  'https://media.istockphoto.com/id/1779586389/photo/ai-machine-learning-hands-of-robot-and-human-touch-on-big-data-network-brain-data-creative-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=jv9cwtG9ut6iUh5vz4UZpfaVuE58JSkaNQmLD7mXO2c=', price: '$249/month' },
  { id: 4, text: 'Automation data analytic Robot',image: 'https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.webp?a=1&b=1&s=612x612&w=0&k=20&c=2iILS0WPh_D-MDMJiIw_14bg6IgJarMUYtDH4D0nIho=', price:'$199/month' },
  { id: 5, text: 'Data analysis AI technology', image: 'https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=IIZaVsQl6mMcOPgyPrVm8ZlCSBwKdwWju4TTnM7BM4Q=', price:'$399/month' },
  { id: 6, text: 'Alex Shuper', image:'https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWl8ZW58MHx8MHx8fDA%3D', price: "$549/month" },

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;
  const totalCards = cards.length;

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <>
    <div  className='parents-blog'>
    
    <div className='feedback-blog'>
    
         <p> Articles </p>
         <h2>Latest Articles & Blogs</h2>
      </div>
 
 
    
    <h1 className='heading'>Latest Articles & Blogs<br/>Articles</h1>
    <div className="carousel">
      <button className="arrow-1" onClick={prevCards} aria-label="Previous">←</button>
      <div className="cards-container">
        {Array.from({ length: cardsToShow }).map((_, i) => {
          const index = (currentIndex + i) % totalCards;
          return (
            <div key={cards[index].id} className="card">
              <img src={cards[index].image} alt={cards[index].text} />
              <p>{cards[index].text}</p>
              <p className="price">${cards[index].price}</p>
            </div>
          );
        })}
      </div>
      <button className="arrow-1" onClick={nextCards} aria-label="Next">→</button>
    </div>
    </div>
    </>
  );
};

export default Carousel;
