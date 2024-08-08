import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MessageBoard.css';

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios.get('http://localhost:5000/messages')
      .then(response => {
        console.log('Fetched messages:', response.data);
        setMessages(response.data);
      })
      .catch(error => console.error('Error fetching messages:', error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/messages', { text: newMessage })
      .then(response => {
        console.log('Message posted:', response.data);
        setMessages(prevMessages => [...prevMessages, response.data]);
      })
      .catch(error => console.error('Error posting message:', error));
    setNewMessage('');
  };

  return (
    <div className="message-board">
      <h1>掲示板</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="メッセージを入力"
        />
        <button type="submit">送信</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageBoard;
