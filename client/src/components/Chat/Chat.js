import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import Messages from '../Messages/Messages';
import TopBar from '../TopBar/TopBar';
import Input from '../Input/Input';
import SideBar from '../SideBar/SideBar';
import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';

  let history = useHistory();

  // 'location' is passed in props from react-router and is used to get the url data,
  useEffect(() => {
    const { name, room } = queryString.parse(location.search); // parse query string

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);
    //  emit event (event, data to send, callback)
    socket.emit('join', { name, room }, error => {
      if (error) {
        history.push('/'); // redirect back to home when username is taken;
        console.log(error);
        return;
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  // send message and clear input field in the callback
  const sendMessage = e => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="chatContainer">
      <div className="sideBox">
        <SideBar users={users} />
      </div>
      <div className="chatBox">
        <TopBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
