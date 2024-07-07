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
     return botMessage = "Congratulations! You've won";
    }
  }

  const handleSend = () => {
    if (typeof input === 'string') return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    const botMessage = GameLogic();

    if(botMessage === "Congratulations! You've won") {
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

  function getFormattedDate() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const specificDate = new Date(year, month, day); // month - 1 because months are 0-indexed
    const dayOfWeek = daysOfWeek[specificDate.getDay()];
    const monthName = monthsOfYear[specificDate.getMonth()]; // Get the month name
    
    return `${dayOfWeek},  ${day} ${monthName} ${year}`;
}

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-instructions">
        <p> 🚀The Computer has Generated a number between 1 to 100. You've to guss that number. <br />
        Best of Luck 👍
        </p>
      </div>
      <div className="chat-messages" id="chat-messages">
        <div style={{textAlign:"center"}}>
          <span className='date'>{getFormattedDate()}</span>
        </div>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'user' ? 'sent' : 'received'}`}>
            <div className={`message-content ${msg.sender === 'user' ? 'sent' : 'received'}`}>
              <span>{msg.text}</span>
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