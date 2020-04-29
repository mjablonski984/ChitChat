import React from 'react';
import './TopBar.css';

const InfoBar = ({ room }) => (
  <div className="topBar">
    <div className="innerTop leftBox">
      <h3>
        <i className="far fa-comments"></i>&nbsp;&nbsp; {room}
      </h3>
    </div>
    <div className="innerTop rightBox">
      <a href="/" className="leave">
        <i className="fas fa-sign-out-alt fa-2x"></i>
      </a>
    </div>
  </div>
);

export default InfoBar;
