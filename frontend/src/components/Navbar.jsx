import React from 'react';
import "./Navbar.css"
import logo from "../assets/logo.png"
import jobType from "../assets/job-type.png"
import location from "../assets/location.png"
import search from "../assets/search.png"
import down from "../assets/down.png"

const Navbar = ({ onCreateJobClick ,filters, onFilterChange}) => {
  const formatSalary = (amount) => {
    if (amount >= 100000) {
      return `${Math.floor(amount / 100000)} LPA+`;
    }
    return `${Math.floor(amount / 1000)}k+`;
  };
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
          <img src={search} className="search" alt="" />
          <input
            type="text"
            name="keyword"
            value={filters.keyword}
            onChange={onFilterChange}
            className="filter-input"
            placeholder="Search By Job Title, Role"
          />
        </div>

        <div className="vertical-line"></div>

        <div className="filter-item">
          <img src={location} className="location" alt="" />
          <select name='location'
            className="filter-input select-dropdown"
            value={filters.location}
            onChange={onFilterChange}
          >
            <option value="">Preferred Location</option>
            <option value="Chennai">Chennai</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Coimbatore">Coimbatore</option>
          </select>
          <img src={down} className="down" alt="" />
        </div>

        <div className="vertical-line"></div>

        <div className="filter-item">
          <img src={jobType} className="jobType" alt="" />
          <select
            className="filter-input select-dropdown"
            onChange={onFilterChange} name='jobType'
            value={filters.jobType}
          >
            <option className='option' value="">Job type</option>
            <option className='option' value="Full-time">Full-time</option>
            <option className='option' value="Part-time">Part-time</option>
            <option className='option' value="Contract">Contract</option>
            <option className='option' value="Internship">Internship</option>
          </select>
          <img src={down} className="down" alt="" />
        </div>

        <div className="vertical-line"></div>

        <div className="filter-item">
          <div className="salary-range-container">
            <div className="salary-range-text">
              <label>Minimum Salary</label>
              <span className="salary-value">
              {formatSalary(filters.salary)}
  </span>
            </div>
            <div className="range-wrapper">
              <input
                type="range"
                min="0"
                max="1200000"
                name="salary"
                step="100000"
                value={filters.salary}
                onChange={onFilterChange}
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
