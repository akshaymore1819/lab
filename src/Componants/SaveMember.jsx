import React from 'react';
import './SaveMember.css';
import memberIcon from '../assets/logo.png'; // Replace with your local icon path
import { Link } from 'react-router-dom';


const SaveMember = () => {
  return (
    <div className="no-member-wrapper">
      <div className="content-center">
        <img src={memberIcon} alt="No Member Icon" className="member-icon" />
        <p className="no-member-text">You don’t have any saved member</p>
        <Link to="/AddMemberForm">
  <button className="add-member-btn">+ Add a new member</button>
</Link>

        <p className="max-member-text">Max.15 member can be added</p>
      </div>
      <div className="git pull origin mainnavigation-buttons">
        <button className="nav-btn previous">
          Previous <span className="arrow">⌄</span>
        </button>
        <button className="nav-btn next">
          Next <span className="arrow">⌄</span>
        </button>
      </div>
    </div>
  );
};

export default SaveMember;
