import { useState } from "react";
import React from "react";
import "./KanbanBoard.scss";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
import { MdOutlineNotifications } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      heading: "headingone",
      title: "Task1",
      status: "pending",
      priority: "High",
    },
    {
      id: 2,
      heading: "Footer",
      title: "The footer of the IKEA project",
      status: "pending",
      priority: "Medium",
    },
    {
      id: 3,
      heading: "Header ",
      title: "The header of the Lulu project",
      status: "pending",
      priority: "Low",
    },
    {
      id: 4,
      heading: "Footer",
      title: "The footer of the IKEA project",
      status: "completed",
      priority: "Medium",
    },
    {
      id: 5,
      heading: "Header ",
      title: "The header of the Lulu project",
      status: "pending",
      priority: "Low",
    },
  ]);
  const [itemId, setItemId] = useState();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [remainingTime, setRemainingTime] = useState("");
  const TotalTime = 500;

  const handleDrop = (e, status) => {
    e.preventDefault();
    console.log(status, itemId);
    const taskId = e.dataTransfer.getData("text");
    const updatedTasks = tasks.map((task) =>
      task.id.toString() === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text", id);
    setItemId(id);
  };

  const formatTime = (hours, minutes) => {
    return `${hours.toString().padStart(2, "0")} hrs : ${minutes
      .toString()
      .padStart(2, "0")} mins`;
  };

  //Time Viewing part

  //Setting Start Time and End Time
  const handleStartTimeChange = (event) => {
    const newStartTime = event.target.value;
    // Validate the start time before setting the state
    if (newStartTime >= "09:00" && newStartTime <= "13:00") {
      setStartTime(newStartTime);
    } else {
      alert("Please enter a time between 09:00 and 13:00 for the start time.");
    }
  };

  const handleEndTimeChange = (event) => {
    const newEndTime = event.target.value;
    // Validate the end time before setting the state
    if (newEndTime >= "13:00" && newEndTime <= "20:00") {
      setEndTime(newEndTime);
    } else {
      alert("Please enter a time between 13:00 and 20:00 for the end time.");
    }
  };

  //To calulate the working time from start time and end time
  const handleSave = () => {
    // Convert start time and end time strings to Date objects
    const startTimeObj = new Date(`2000-01-01T${startTime}`);
    const endTimeObj = new Date(`2000-01-01T${endTime}`);

    // Calculate the difference in milliseconds
    const timeDiffMillis = endTimeObj - startTimeObj;

    // Convert milliseconds to hours
    const totalHours = timeDiffMillis / (1000 * 60 * 60);

    // Calculate the remaining time in hours
    const remainingTime = TotalTime - totalHours;

    // Split the remaining time into hours and minutes
    const remainingHours = Math.floor(remainingTime);
    const remainingMinutes = Math.floor((remainingTime % 1) * 60);

    // Format the remaining time
    const formattedRemainingTime = formatTime(remainingHours, remainingMinutes);

    // Update the remainingTime state
    setRemainingTime(formattedRemainingTime);
  };

  return (
    <div className="kambanboardmain">
      <div className="topsection">
        <></>
      </div>
      <div className="kanban-board-container">
        <div className="kanban-board ">
          <div
            className="column column1"
            onDrop={(e) => handleDrop(e, "pending")}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="heading-pending">
              <h3>Pending</h3>
            </div>

            {tasks
              .filter((task) => task.status === "pending")
              .map((task) => (
                <div
                  key={task.id}
                  className="task"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  <div className="pendingtaskheading">{task.heading}</div>
                  {task.title}
                  {task.priority == "Low" ? (
                    <div className="low-priority">
                      <FcLowPriority size={20} /> {task.priority} Priority
                    </div>
                  ) : (
                    ""
                  )}
                  {task.priority == "High" ? (
                    <div className="high-priority">
                      <FcHighPriority size={20} /> {task.priority} Priority
                    </div>
                  ) : (
                    ""
                  )}
                  {task.priority == "Medium" ? (
                    <div className="medium-priority">
                      <FcMediumPriority /> {task.priority} Priority
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
          <div
            className="column column2"
            onDrop={(e) => handleDrop(e, "In-progress")}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="heading-progress">
              <h3>In Progress</h3>
            </div>
            {tasks
              .filter((task) => task.status === "In-progress")
              .map((task) => (
                <div
                  key={task.id}
                  className="task"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  <div className="inprogresstaskheading">{task.heading}</div>
                  {task.title}
                  {task.priority == "Low" ? (
                    <div className="low-priority">
                      <FcLowPriority size={20} /> {task.priority} Priority
                    </div>
                  ) : (
                    ""
                  )}
                  {task.priority == "High" ? (
                    <div className="high-priority">
                      <FcHighPriority size={20} /> {task.priority} Priority
                    </div>
                  ) : (
                    ""
                  )}
                  {task.priority == "Medium" ? (
                    <div className="medium-priority">
                      <FcMediumPriority /> {task.priority} Priority
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
          <div
            className="column column3"
            onDrop={(e) => handleDrop(e, "completed")}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="heading-completed">
              <h3>Completed</h3>
            </div>

            {tasks
              .filter((task) => task.status === "completed")
              .map((task) => (
                <div
                  key={task.id}
                  className="task"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  <div className="completedtaskheading">{task.heading}</div>
                  {task.title}
                  {task.priority == "Low" ? (
                    <div className="low-priority">
                      <FcLowPriority size={20} /> {task.priority} Priority
                    </div>
                  ) : (
                    ""
                  )}
                  {task.priority == "High" ? (
                    <div className="high-priority">
                      <FcHighPriority size={20} /> {task.priority} Priority
                    </div>
                  ) : (
                    ""
                  )}
                  {task.priority == "Medium" ? (
                    <div className="medium-priority">
                      <FcMediumPriority /> {task.priority} Priority
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="time-details-container">
        <div className="time-details-title">
          <h2>
            Total Time :{TotalTime} <span> hrs</span>
          </h2>
        </div>
        <div className="time-details-body">
          <div className="time-details-body-left">
            <div className="time-details-body-startEnd">
              <label>Start Time</label>
              <input
                type="time"
                min="09:00"
                max="13:00"
                onChange={handleStartTimeChange}
              />
            </div>
            <div className="time-details-body-startEnd">
              <label>End Time</label>
              <input
                type="time"
                min="13:00"
                max="20:00"
                onChange={handleEndTimeChange}
              />
            </div>
            <button onClick={handleSave}>Save</button>
          </div>
          <div className="time-details-body-right">
            <h3>Time Left: {remainingTime ? remainingTime : TotalTime} </h3>
            <ProgressBar
              width="100%"
              bgColor="rgba(20, 172, 172,0.8) "
              //calculating the percentage of time which left= remainingTime/TotalTime *100
              customLabel={remainingTime ? (parseInt(remainingTime)/parseInt(TotalTime))*100  : "100%"}
              completed={parseInt(remainingTime)}
              maxCompleted={parseInt(TotalTime)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
;

export default KanbanBoard;
