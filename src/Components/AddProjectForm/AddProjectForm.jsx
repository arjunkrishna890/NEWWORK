import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddProjectForm.scss";

const AddProjectForm = () => {
  const [user, setUser] = useState([]);
  const [team, setTeam] = useState([]);
  const [selectedTechs, setSelectedTechs] = useState({});
  const [projectname,setProjectname] = useState();
  const [description,setDescription] = useState();
  const [time,setTime] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/team")
      .then((response) => {
        setTeam(response.data);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });

    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const technologyLabels = team;

  const handleCheckboxChange = (event, tech) => {
    setSelectedTechs((prevSelectedTechs) => ({
      ...prevSelectedTechs,
      [tech]: event.target.checked,
    }));
  };

  return (
    <>
      <div className="container">
        <form className="Add-Projectform">
          <h2 className="form-heading">Add a New Project</h2>

          <div className="form-group">
            <label htmlFor="name">Project Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="time">Time quoted in hours:</label>
            <input type="text" id="deadline" name="deadline" />
          </div>
        </form>

        <form className="Add-Projectform">
          <div className="technologies">
            <h2 className="form-heading">Technologies</h2>
            {technologyLabels.map((tech, index) => (
              <div key={index} className="checkbox-row">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedTechs[tech]}
                    onChange={(e) => handleCheckboxChange(e, tech)}
                  />
                  {tech.toUpperCase()}
                </label>
                {selectedTechs[tech] && (
                  <div className="dropdown">
                    <select>
                      {user.map((us) =>
                        us.team === tech ? (
                          <option key={us.id} value={us.name}>
                            {us.name}
                          </option>
                        ) : null
                      )}
                    </select>
                    <input type="text" placeholder="Hours for each Team"/>
                  </div>
                  
                )}
              </div>
            ))}
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProjectForm;
