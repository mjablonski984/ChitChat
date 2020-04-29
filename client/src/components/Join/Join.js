import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinContainer">
      <div className="headingBox">
        <h1 className="headingTop">
          <i className="far fa-comments"></i> Chit-Chat
        </h1>
        <h2>Join</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          className="joinInput"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Room"
          className="joinInput"
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>

      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button className={'joinBtn'} type="submit">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default Join;
