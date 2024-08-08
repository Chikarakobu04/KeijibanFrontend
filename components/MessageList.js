import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MessageList.css';

function MessageList() {
  const [messages, setMessages] = useState([]);

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

  return (
    <div className="message-list">
      <h1>メッセージ一覧</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
