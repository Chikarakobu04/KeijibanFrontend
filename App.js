import React from 'react';
import MessageBoard from './components/MessageBoard';
import MessageList from './components/MessageList';
import './App.css';

function App() {
  return (
    <div className="App">
      <MessageBoard />
      <MessageList />
    </div>
  );
}

export default App;
