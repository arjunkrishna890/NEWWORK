import React from "react";
import "./EmployeeProjectListing.scss"
import { useState } from "react";
import AddTaskForm from "../AddTasksForm/AddTaskForm";
import { Link } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import Notifications from "../NotificationDrawer/Notification";


function EmployeeProjectList() {
  const [showPopup, setShowPopup] = useState(false);
  const [showNotification,setNotification] = useState(false);


  const handleCreateProjectClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <div className="employeelandingpage">
        <div className="topsection">
        {/* <Notifications/> */}
    <MdOutlineNotifications color="white" />
    <div className="search-input">
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search" />
    </div>
    <MdOutlineNotifications size={25} color="teal" />
  </div>
    <div className="employee-table-container">
    
      <div className="employee-first">
        <h3 className="employee-title">
          <b>Project List</b>
        </h3>
        <button className="employee-custom-button" onClick={handleCreateProjectClick}>
         Add task
        </button>
      </div>

      <table className="employee-custom-table">
        <thead>
          <tr>
            <th className="employee-left">Project Name</th>
            <th className="employee-left">Status</th>
            <th className="employee-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="employee-left">Lulu International</td>
            <td className="employee-status-red">Not completed</td>
            <td className="employee-right"><Link to='/employeedashboard/task-detail' className="Link" >Viewtasks</Link></td>
          </tr>
          <tr>
            <td className="employee-left">IKEA</td>
            <td className="employee-status-green">Completed</td>
            <td className="employee-right"><Link to='/employeedashboard/task-detail' className="Link" >Viewtasks</Link></td>
          </tr>
          <tr>
            <td className="employee-left">Lulu International</td>
            <td className="employee-status-red">Not completed</td>
            <td className="employee-right"><Link to='/employeedashboard/task-detail' className="Link" >Viewtasks</Link></td>
          </tr>
          <tr>
            <td className="employee-left">Lulu International</td>
            <td className="employee-status-red">Not completed</td>
            <td className="employee-right"><Link to='/employeedashboard/task-detail' className="Link" >Viewtasks</Link></td>
          </tr>
        </tbody>
      </table>

      {showPopup && (
        <div className="employee-popup-container">
          <div className="employee-popup-overlay" onClick={handlePopupClose} />
          <div className="employee-popup-content">
            <AddTaskForm />
          </div>
        </div>
      )}
    </div>
  
    </div>
  
  );
}

export default EmployeeProjectList;
