import React from 'react';
import  {useState} from 'react';



const faqs = [
    {
      question: "What products do you sell?",
      answer: "We sell a variety of electronics, home goods, and fashion accessories carefully curated for quality and affordability.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship internationally. Shipping costs and times vary depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all items. Items must be returned in original condition.",
    },
  ];

function About() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index)=> {
        setOpenIndex(openIndex === index ? null : index)
    };


  return (
    <div className='about-container'>
        <h2> About Us</h2>

        <p className='about-description'>
            Welcome to our online store! We are committed to bringing you the best online shopping experience possible.
        Whether you're looking for cutting-edge tech or everyday essentials, we've got you covered.
        </p>

        <h3 className='faq-tilte'>Frequently Asked Questions</h3>
        <div className='faq-section'>
            {faqs.map((faq, index)=>(
                < div key={index} className='faq-item'>

                    <button className='faq-question' onClick={()=> toggleFAQ(index)}>
                        <span>{faq.question}</span>
                        <span className='faq-icon'>{openIndex === index ? '_' : '+'} </span>
                    </button>

                    {openIndex === index && (
                        <div className='faq-answer'>{faq.answer}</div>
                    )}
                    </div>
            ) ) }

        </div>

    </div>
  );
}

export default About;