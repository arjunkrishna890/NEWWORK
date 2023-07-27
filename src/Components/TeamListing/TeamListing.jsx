import React from "react";
import "./TeamListing.scss";
function TeamListing() {
  return (
    <div className="tables-container">
      <h3 className="title">
        <b>Team Listing</b>
      </h3>
      <div className="list-container">
        <ul className="custom-list">
          <li>
            <span className="list-item">Arjun krishna</span>
            <span className="list-description">React Js</span>
          </li>
          <li>
            <span className="list-item">Hrithik</span>
            <span className="list-description">java</span>
          </li>
          <li>
            <span className="list-item">Angel Mariya</span>
            <span className="list-description">Angular</span>
          </li>
          <li>
            <span className="list-item">Febin</span>
            <span className="list-description">Node js</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamListing;
