import React from 'react';

import './SideBar.css';

const SideBar = ({ users }) => (
  <div className="sideBar">
    <div className="sideHeading">
      <h3>Chit-Chat</h3>
    </div>
    {users ? (
      <div className="activeBox">
        <i className="fas fa-users fa-2x usersIcon"></i>
        <h4>Active:</h4>
        {users.map(({ name }) => (
          <p key={name} className="activeUser">
            {name}
          </p>
        ))}
      </div>
    ) : null}
    <div className="sideInfo">
      <span>
        <i className="fas fa-info-circle"></i> Info
      </span>
      <p>Realtime chat</p>
      <p>Build with Socket.io</p>
    </div>
  </div>
);

export default SideBar;
