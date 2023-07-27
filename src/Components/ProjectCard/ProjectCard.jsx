import React from 'react';
import { useState } from 'react';
import {AiFillEdit} from 'react-icons/ai';
import { BsPlusCircleDotted ,BsTrash} from "react-icons/bs";
import './projectCard.scss';
import ProgressBar from '@ramonak/react-progress-bar';

const ProjectCard = () => {
  const [expandedTeam, setExpandedTeam] = useState('React');

  const handleTeamClick = (team) => {
    if (expandedTeam === team) {
      setExpandedTeam(null); // Collapse the team if it's already expanded
    } else {
      setExpandedTeam(team); // Expand the clicked team
    }
  };
  return (
     
    <div className='projectcontainer'>
    <div className='topsection'>
      <div className='projectdetails'>
        <h2>Lulu International</h2>
        <ProgressBar
              width="70%"
              bgColor="rgba(20, 172, 172,0.8) "
              customLabel={"70%"}
              // completed={parseInt(remainingTime)}
              // maxCompleted={parseInt(TotalTime)}
            />
        <h4>Total hours quoted :2000 hours <AiFillEdit/></h4>
        <p>Estimated Date of Completion: 25/10/2023</p>
        <p>Hours left: 2000 hours</p>
        
        <div className='percentage'>
          {/* <h1>64%</h1> */}
        </div>
      </div>

      <div className='teamdetail'>
        <h4 >
           Team  <BsPlusCircleDotted />
        </h4>
        <div className="list">
        <ul>
          <li onClick={() => handleTeamClick('React')}>
            <b>React</b>
            {expandedTeam === 'React' && (
          <ul className='nestedlist'>
            <h4 className='heading'>Hours Quoted : 500hours</h4>
            <li className='nestedlistitem'>Arjun
            </li>
            <li className='nestedlistitem'>Hrithik</li>
            <li className='nestedlistitem'>Alin</li>
            <li className='nestedlistitem'>Alan</li>
            <li className='nestedlistitem'><AiFillEdit/></li>
          </ul>
        )}
         
          </li>
          <li onClick={() => handleTeamClick('Node')}>
            <b>Node</b>
            {expandedTeam === 'Node' && (
          <ul className='nestedlist'>
             <h4 className='heading'>Hours Quoted : 500hours</h4>
            <li className='nestedlistitem'>Angel</li>
            <li className='nestedlistitem'>Febin</li>
            <li className='nestedlistitem'>Akash</li>
            <li className='nestedlistitem'><AiFillEdit/></li>
          </ul>
        )}
          </li>
          <li onClick={() => handleTeamClick('UI')}>
            <b>UI</b>
            {expandedTeam === 'UI' && (
          <ul className='nestedlist'>
             <h4 className='heading'>Hours Quoted : 1500hours</h4>
            <li className='nestedlistitem'>Zone</li>
            <li className='nestedlistitem'>Cristo</li>
            <li className='nestedlistitem'>Akashy</li>
            <li className='nestedlistitem'><AiFillEdit/></li>
          </ul>
        )}
          </li>
          <li onClick={() => handleTeamClick('Design')}>
            <b>Design</b>
            {expandedTeam === 'Design' && (
          <ul className='nestedlist'>
             <h4 className='heading'>Hours Quoted : 600hours</h4>
            <li className='nestedlistitem'>Zone</li>
            <li className='nestedlistitem'>Cristo</li>
            <li className='nestedlistitem'>Akashy</li>
            <li className='nestedlistitem'><AiFillEdit/></li>
          </ul>
        )}
          </li>
        </ul>
        </div>
      </div>
    </div>

    <div className='bottomsection'>
      <div className='Description'>
        <h3>Project Analytics</h3>
        <div className='table'>
        <table className='custom-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Team Name</th>
          <th>Total Hours</th>
          <th>Members</th>
          <th>Hours Left</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>React Js</td>
          <td>500hours</td>
          <td>
          <table className='nested-table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Total Hours</th>
                  <th>Hours Left</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Arjun Krishna</td>
                <td>32hours</td>
                <td>20hours</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Hrithik</td>
                <td>32hours</td>
                <td>20hours</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Alin</td>
                <td>32hours</td>
                <td>20hours</td>
              </tr>
              </tbody>
            </table>
          </td>
        <td>300hours</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Node </td>
          <td>500hours</td>
          <td>
            <table className='nested-table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Total Hours</th>
                  <th>Hours Left</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Angel Maria</td>
                <td>32hours</td>
                <td>20hours</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Febin</td>
                <td>32hours</td>
                <td>20hours</td>
              </tr>
              </tbody>
            </table>
          </td>
          <td>300hours</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>

        </div>
        
      </div>
    </div>
    <div className="bottemestsection">
    <div className='Description'>
    <h3>Description <AiFillEdit/></h3>
        <textarea name='' id=''></textarea>
         
        <h3>Task Instruction <AiFillEdit/></h3>
        <textarea name='instructions' id=''></textarea>
    </div>
             
    </div>
  </div>
  )
}

export default ProjectCard