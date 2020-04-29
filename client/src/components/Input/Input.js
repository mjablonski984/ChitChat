import React from 'react';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      type="text"
      className="input"
      placeholder="Text message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
    />
    <button className="sendBtn" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
