import { useEffect, useRef, useState } from 'react';

function GameChat({generatedNumber, setGuessCounter, setWin}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null); 

  const GameLogic = () => {
    let botMessage;
    if(input < generatedNumber) {
      
      return botMessage =  `Actual number is greater than that number`;
    }
    if(input > generatedNumber) {
      return botMessage = `Actual number is less than that number`;
    }
    if(input === generatedNumber) {
     return botMessage = "Congratulations! You've win";
    }
  }

  const handleSend = () => {
    if (typeof input === 'string') return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    const botMessage = GameLogic();

    if(botMessage === "Congratulations! You've win") {
      setWin(true);
    }

    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: botMessage, sender: 'bot' }]);
      setGuessCounter(prev => prev + 1);
    }, 1000);
  };  
  
  const handleInputChange = (e) => {
    setInput(+e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
    

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-instructions">
        <p>The Computer has Generated a number between 1 to 100. You've to guss that number. 
        Best of Luck !
        </p>
      </div>
      <div className="chat-messages" id="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'user' ? 'sent' : 'received'}`}>
            <div className={`message-content ${msg.sender === 'user' ? 'sent' : 'received'}`}>
              {msg.text}
              <span className='chat-time'>{getCurrentTime()}</span>
            </div>
          </div>
        ))}
        <div ref={chatEndRef}  />
      </div>
      <div className="chat-input">
        <input
          type="number"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Guss Number..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}


export default GameChat