import React from 'react';
import "./Navbar.css"
import logo from "../assets/logo.png"

const Navbar = ({ onCreateJobClick }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="" className="logo" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Find Jobs</li>
          <li>Find Talents</li>
          <li>About us</li>
          <li>Testimonials</li>
        </ul>
        <div className="navbar-right">
          <button className="create-job-btn" onClick={onCreateJobClick}>
            Create Jobs
          </button>
        </div>
      </nav>

      <div className="filter-section">
        <div className="filter-item">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="filter-input"
            placeholder="Search By Job Title, Role"
          />
        </div>

        <div className="vertical-line"></div>

        <div className="filter-item">
          <i className="fas fa-map-marker-alt"></i>
          <input
            type="text"
            className="filter-input"
            placeholder="Preferred Location"
          />
        </div>

        <div className="vertical-line"></div>

        <div className="filter-item">
          <i className="fas fa-user"></i>
          <select className="filter-input select-dropdown">
            <option value="">Job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className="vertical-line"></div>

        <div className="filter-item">
          <div className="salary-range-container">
            <div className="salary-range-text">
              <label>Salary Per Month</label>
              <span className="salary-value">$50k - $60k</span>
            </div>
            <div className="range-wrapper">
              <input
                type="range"
                min="50000"
                max="80000"
                className="salary-range"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
