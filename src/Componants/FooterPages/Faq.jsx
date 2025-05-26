import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqSections = [
    {
      title: 'Booking',
      items: [
        {
          question: 'What does Redcliffe Labs do?',
          answer: 'Redcliffe Labs is the fastest-growing network of diagnostic services offering Integrated radiology and pathology services to identify Communicable and Non-Communicable Diseases (NCDs) altering your health conditions. The primary aim of Redcliffe Labs is to make healthcare accessible and affordable for all. Early detection of health issues helps analyze the condition and take the proper measures to prevent and treat specific diseases.'
        },
        {
          question: 'Why is Redcliffe Labs the best Pathology Lab?',
          answer: 'Despite the competition, Redcliffe Labs is noted as the best pathology lab for qualities like: Precision care and personalized attention, Timely delivery of test reports, Safe sample collection from the comfort of your home, Promise precise reporting adhering to quality and safety standards, Use of certified and standardized lab equipment across our network to ensure an optimized test process.'
        },
        // Continue with all questions...
        {
          question: 'How does my prescription get validated?',
          answer: 'We at Redcliffe Labs take all the measures to ensure our customers\' good health & wellness, so we validate each & every prescription shared with us. The first step to validate the prescription is to check if it is prescribed by a reliable medical practitioner, then we check the date & patient details. We will proceed further with test bookings if all the details are acceptable.'
        },
        {
          question: 'What is The Procedure for Booking a Test with Redcliffe Labs?',
          answer: 'Being a client-oriented diagnostic center, we have made online health packages or test booking fast and easy. Simple steps to book a health test or package: Visit - https://redcliffelabs.com, Search for your desired test or packages on the website/app, In case you need clarification about the most appropriate preventive health checkup, check our Package Selector at https://redcliffelabs.com/recommendation, Select the package, and click on Book Now, Submit your details in the "Fill Up Form" section, Enter (Phone, Name, City, and more, as required), Make the payment.'
        },
        {
          question: 'How Can I Make Payment for The Booking?',
          answer: 'We at Redcliffe Labs support all the reliable online payment options to ensure customer convenience. You can pay via internet banking, debit/credit card, UPI (including PayTm, GPay, and Phonepe), and wallets too.'
        },
        // Add remaining booking questions...
      ]
    },
    {
      title: 'Health Tests',
      items: [
        {
          question: 'What are The Tests Provided by Redcliffe Labs?',
          answer: 'With Redcliffe Labs, you can avail of all the blood tests and pathology services from the comfort of your home to ensure that all your body vitals function properly.'
        },
        // Add all health test questions...
      ]
    },
    {
      title: 'Reports',
      items: [
        {
          question: 'How Will I Get My Reports?',
          answer: 'We work for your convenience and make reports available online via your registered email id or WhatsApp number. If you wish to download the reports through the website, follow the below-mentioned steps: Log in to https://redcliffelabs.com through your registered mobile number, Click on your profile, Now go to Bookings & Reports, Click on "Reports" and then "View Details". Here, You Will Get an Option to select the appropriate member and then view/download reports.'
        }
      ]
    },
    {
      title: 'Refund',
      items: [
        {
          question: 'What is your refund policy?',
          answer: 'The Company shall initiate the Refund after reasonable validation of the information received by the Company...'
        }
      ]
    },
    {
      title: 'Express Slot',
      items: [
        {
          question: 'What is Express Slot?',
          answer: 'This program is meant for those customers who want to book their test on an urgent basis...'
        }
      ]
    },
    {
      title: 'VIP Program',
      items: [
        {
          question: 'What is a VIP Program?',
          answer: 'The VIP Program is a loyalty program that rewards our customers for continued engagement...'
        }
      ]
    },
    {
      title: 'Hardcopy',
      items: [
        {
          question: 'What are the charges for Reports hardcopy?',
          answer: 'The charges for a hard copy are ₹150.'
        }
      ]
    },
    {
      title: 'Referral Program',
      items: [
        {
          question: 'How can I refer a friend?',
          answer: 'You can refer your friends and family by following these steps...'
        }
      ]
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>FAQs</h1>

      {faqSections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="faq-section">
          <h2>{section.title}</h2>
          
          {section.items.map((item, itemIndex) => {
            const index = `${sectionIndex}-${itemIndex}`;
            return (
              <div key={index} className="faq-item">
                <div 
                  className="question" 
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="toggle-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                  <h3>{item.question}</h3>
                </div>
                {activeIndex === index && (
                  <div className="answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      ))}

      <div className="app-section">
        <h2>Get Redcliffe Labs App Today</h2>
        <p>For the convenience of health management at your fingertips. Book health tests with home sample collection, download reports, calculate BMI, and get complimentary value-added benefits.</p>
        <div className="download-buttons">
          <button className="android-button">Get It Now</button>
          <button className="ios-button">Get It Now</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;