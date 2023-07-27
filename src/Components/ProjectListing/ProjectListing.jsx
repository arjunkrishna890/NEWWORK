import React from "react";
import "./ProjectListing.scss";
import { useState } from "react";
import AddProjectForm from "../AddProjectForm/AddProjectForm";
import { Link } from "react-router-dom";

function ProjectListing() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCreateProjectClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <div className="table-container">
      <div className="first">
        <h3 className="title">
          <b>Project List</b>
        </h3>
        <button className="custom-button" onClick={handleCreateProjectClick}>
          Create project
        </button>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th className="left">Project Name</th>
            <th className="left">Status</th>
            <th className="right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="left">Lulu International</td>
            <td className="status-red">Not completed</td>
            <td className="right"><Link to='/admin/projectdetail' className="Link">Viewmore</Link></td>
          </tr>
          <tr>
            <td className="left">IKEA</td>
            <td className="status-green">Completed</td>
            <td className="right"><Link to='/admin/projectdetail' className="Link">Viewmore</Link></td>
          </tr>
          <tr>
            <td className="left">Lulu International</td>
            <td className="status-red">Not completed</td>
            <td className="right"><Link to='/admin/projectdetail' className="Link">Viewmore</Link></td>
          </tr>
          <tr>
            <td className="left">Lulu International</td>
            <td className="status-red">Not completed</td>
            <td className="right"><Link to='/admin/projectdetail' className="Link">Viewmore</Link></td>
          </tr>
          <tr>
            <td className="left">Lulu International</td>
            <td className="status-red">Not completed</td>
            <td className="right"><Link to='/admin/projectdetail' className="Link">Viewmore</Link></td>
          </tr>
          <tr>
            <td className="left">Lulu International</td>
            <td className="status-red">Not completed</td>
            <td className="right"><Link to='/admin/projectdetail' className="Link">Viewmore</Link></td>
          </tr>
        </tbody>
      </table>

      {showPopup && (
        <div className="popup-container">
          <div className="popup-overlay" onClick={handlePopupClose} />
          <div className="popup-content">
            <AddProjectForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectListing;
