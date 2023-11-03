import React, { useState } from 'react';
import Header from './Header';
import './Chatbot.css';

const responses = [
  {
    "keywords": ["hello"],
    "response": "Hello! Welcome to our pet care service chatbot. How can we assist you with your pet's needs today?"
  },
  {
    "keywords": ["feed", "dog"],
    "response": "You should feed your dog a balanced diet that includes high-quality dog food."
  },
  {
    "keywords": ["walk", "cat"],
    "response": "Cats do not require regular walks like dogs. However, you can play with your cat and provide enrichment activities to keep them active."
  },
  {
    "keywords": ["groom", "pet"],
    "response": "Grooming at home can include brushing, bathing, and trimming, but it depends on your pet's specific needs. Regular grooming can help maintain your pet's health and appearance."
  },
  {
    "keywords": ["pet", "insurance"],
    "response": "Pet insurance can help cover the cost of veterinary care in case of illness or injury. It's a good idea to consider for your pet's health and safety. There are different types of pet insurance plans available, so be sure to choose one that suits your pet's needs."
  },
  {
    "keywords": [],
    "response": "I'm not sure I understand. Please ask a different question."
  },
  {
    "keywords": ["boarding", "dog"],
    "response": "When you need to travel, consider dog boarding services. They provide a safe and comfortable environment for your dog while you're away."
  },
  {
    "keywords": ["vaccination", "cat"],
    "response": "Regular vaccinations are essential to protect your cat from diseases. Consult your veterinarian for a vaccination schedule."
  },
  {
    "keywords": ["training", "puppy"],
    "response": "Puppy training is crucial for a well-behaved pet. Look for professional trainers who can help your puppy learn essential skills and manners."
  },
  {
    "keywords": ["grooming", "cat"],
    "response": "Grooming services for cats often include brushing, nail trimming, and fur mat removal. It's important to keep your cat looking and feeling their best."
  },
  {
    "keywords": ["emergency", "pet"],
    "response": "In case of a pet emergency, have the contact information for the nearest 24/7 veterinary clinic on hand. Quick response is vital."
  },
  {
    "keywords": ["sitting", "pet"],
    "response": "Pet sitting services are a great option if you need someone to care for your pets while you're away. Choose a reliable and trustworthy sitter."
  },
  {
    "keywords": ["dental", "dog"],
    "response": "Regular dental care is important for dogs. Consider professional dental cleanings to prevent dental issues and keep your dog's breath fresh."
  },
  {
    "keywords": ["insurance", "cat"],
    "response": "Pet insurance can provide peace of mind for unexpected veterinary expenses for your cat. Compare plans and choose one that suits your feline friend."
  },
  {
    "keywords": ["reptile", "care"],
    "response": "Reptiles have unique care requirements. Make sure to research and provide the right habitat, temperature, and diet for your pet reptile."
  },
  {
    "keywords": ["grooming", "dog"],
    "response": "Professional dog grooming services can include baths, haircuts, and nail trims. Grooming not only keeps your dog clean but also helps maintain their overall health."
  },
  {
    "keywords": ["feed", "pet"],
    "response": "You should feed your dog a balanced diet that includes high-quality dog food."
  },
];

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleUserInput = () => {
    const userMessage = userInput.trim().toLowerCase();

    // Check for keyword matches
    const matchingResponse = responses.find((response) =>
      response.keywords.every((keyword) => userMessage.includes(keyword))
    );

    const botResponse = matchingResponse ? matchingResponse.response : responses[responses.length - 1].response;

    const updatedChatLog = [...chatLog, { user: userInput, bot: botResponse }];
    setChatLog(updatedChatLog);
    setUserInput('');
  }

  return (
    <div>
      <Header />
      
      <div className='image-container'>
        <img className="bg" src='meet.jpg'alt='bg' />
      </div>
      
     
    <div className="chatbot-container">
      <div className="chatbot-header">
       

        <h2>Pet Care Chatbot</h2>
        
      </div>
      <div className="chatbot-content">
        {chatLog.map((entry, index) => (
          <div className="message" key={index}>
            <div className="user-message">
             
              <b>User</b>: {entry.user}
            </div>
            <div className="bot-message">
              
              <b>Bot</b>: {entry.bot}
            </div>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button onClick={handleUserInput}>Send</button>
      </div>
    </div>
    </div>
    
  );
}

export default Chatbot;
