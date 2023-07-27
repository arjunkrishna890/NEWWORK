import React, { useState } from 'react';
import './Notification.scss';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationToggle = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="notification-container">
      <input
        type="checkbox"
        name=""
        className="notification-btn"
        checked={showNotification}
        onChange={handleNotificationToggle}
      />
      <div className={`notification-box ${showNotification ? 'open' : ''}`}>
        <div className="notification-header">
          <p>Notifications</p>
          <a href="#">See all</a>
        </div>
        <div className="notification-content">
          <div className="notification-item">
            {/* <img src="harry.jpg" alt="" /> */}
            <div className="notification-text">
              <p>
                <span className="notification-name">Arjun Krishna</span> completed the task.
              </p>
              <p className="notification-time">1 hour ago</p>
            </div>
          </div>
          <div className="notification-item">
            {/* <img src="ron.jpg" alt="" /> */}
            <div className="notification-text">
              <p>
                <span className="notification-name">Febin</span> has completed your task.
              </p>
              <p className="notification-time">1 hour ago</p>
            </div>
          </div>
          <div className="notification-item">
            {/* <img src="hermione.jpg" alt="" /> */}
            <div className="notification-text">
              <p>
                <span className="notification-name">Hermione Granger</span> reacted to your post.
              </p>
              <p className="notification-time">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
