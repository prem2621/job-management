import React, { useState } from "react";
import "./JobForm.css";
import axios from "axios"

const JobForm = () => {
  const [user, setUsers] = useState({
    jobtitle: "",
    companyName: "",
    location: "",
    jobTypes: "",
    salaryMin: "",
    salaryMax: "",
    jobDescription: "",
  });

  const [lpaRange, setLpaRange] = useState("");

  const [formVisible, setFormVisible] = useState(true);

  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;

    // 1️⃣ Text validation
    if (["jobtitle", "companyName", "location"].includes(name)) {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        setError(`${name} should contain only letters`);
        return;
      }
    }

    // 2️⃣ Number validation for salary fields
    if (["salaryMin", "salaryMax"].includes(name)) {
      if (!/^\d*$/.test(value)) {
        setError("Salary fields must contain only numbers");
        return;
      }

      const num = Number(value);
      if (num < 0 || num > 1299999) {
        setError("Salary must be between ₹0 and ₹12,99,999");
        return;
      }
    }

    // 3️⃣ Update state and clear error
    setUsers({ ...user, [name]: value });
    setError("");

    // 4️⃣ Calculate LPA Preview only if both salaryMin and salaryMax exist
    const min = name === "salaryMin" ? Number(value) : Number(user.salaryMin);
    const max = name === "salaryMax" ? Number(value) : Number(user.salaryMax);

    if (!isNaN(min) && !isNaN(max) && min >= 0 && max >= min) {
      const cappedMax = Math.min(max, 1299999);
      const lpa = (cappedMax / 100000).toFixed(1); // e.g., 6.2 LPA
      setLpaRange(`${lpa} LPA`);
    } else {
      setLpaRange("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !user.jobtitle ||
      !user.companyName ||
      !user.location ||
      !user.jobTypes ||
      !user.salaryMin ||
      !user.salaryMax ||
      !user.jobDescription
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      await axios.post("https://job-management-backend-u9w6.onrender.com/jobs", user);
      alert("data succefully inserted");
      setUsers({
        jobtitle: "",
        companyName: "",
        location: "",
        jobTypes: "",
        salaryMin: "",
        salaryMax: "",
        jobDescription: "",
      });
      setFormVisible(false);
    } catch (err) {
      console.error(err);
      alert("Error submitting user");
    }
    console.log(user);
  };

  return (
    formVisible && (
      <div className="job-form-container">
      <h2>Create Job Opening</h2>

      <form className="job-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group ">
            <label htmlFor="jobtitle">Job Title</label>
            <input
              type="text"
              value={user.jobtitle}
              onChange={handleChange}
              name="jobtitle"
              placeholder="Full Stack Developer"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              value={user.companyName}
              onChange={handleChange}
              name="companyName"
              type="text"
              placeholder="Amazon, Microsoft, Swiggy"
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label htmlFor="location">Location</label>
            <select
              className="location-select"
              name="location"
              value={user.location}
              onChange={handleChange}
            >
              <option>Choose Preferred Location</option>
              <option>Chennai</option>
              <option>Bengaluru</option>
              <option>Coimbatore</option>
              <option>Hyderabad</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="jobTypes">Job Type</label>
            <select
              name="jobTypes"
              value={user.jobTypes}
              onChange={handleChange}
            >
              <option>FullTime</option>
              <option>PartTime</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        <div className="row">
          
          <div className="input-group half">
  <label htmlFor="salaryRange">Salary Range</label>
  <div className="salary-range">
    <div className="input-icon-wrapper">
      <i className="fa-solid fa-arrow-up icon-inside"></i>
      <input
        type="text"
        placeholder="₹ 0"
        name="salaryMin"
        value={user.salaryMin}
        onChange={handleChange}
      />
    </div>

    <div className="input-icon-wrapper">
      <i className="fa-solid fa-arrow-down icon-inside"></i>
      <input
        type="text"
        placeholder="₹ 12,00,000"
        name="salaryMax"
        value={user.salaryMax}
        onChange={handleChange}
      />
    </div>
  </div>

  {lpaRange && (
    <div className="lpa-preview">
      Estimated Max Salary: <strong>{lpaRange}</strong>
    </div>
  )}
</div>
          <div className="input-group">
            <label>Application Deadline</label>
            <input
              type="datetime"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (e.target.value === "") e.target.type = "text";
              }}
            />
          </div>
        </div>

        <div className="input-group full">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            value={user.jobDescription}
            onChange={handleChange}
            name="jobDescription"
            placeholder="Please share a description to let the candidate know more about the job role"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="draft-btn">
            Save Draft <i className="fa-solid fa-angles-down"></i>
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="publish-btn">
            Publish <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
      </form>
    </div>
    )
    
  )
};

export default JobForm;
