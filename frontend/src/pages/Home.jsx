import React, {  useState } from 'react'
import "./Home.css"
import amazon from "../assets/amazon-logo.png"
import tesla from "../assets/tesla-logo.png"
import swiggy from "../assets/swiggy-logo.png"

import image1 from "../assets/image-1.png"
import image2 from "../assets/image-2.png"
import image3 from "../assets/image-3.png"

const Home = ({jobs,filteredJobs}) => {


   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

 
   const getInitial = (companyName) => {
     return companyName ? companyName.charAt(0).toUpperCase() : "C";
   };

  return (
    <div className="filter">

      {loading && <div className="loading">Loading additional jobs...</div>}
      {error && <div className="error">{error}</div>}

{filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div className="box" key={job._id}>
            <div className="box-header">
              <div className="img-box">
              {job.companyName === "Amazon" && <img src={amazon} alt="Amazon" />}
                {job.companyName === "Tesla" && <img src={tesla} alt="Tesla" />}
                {job.companyName === "Swiggy" && <img src={swiggy} alt="Swiggy" />}
                {!["Amazon", "Tesla", "Swiggy"].includes(job.companyName) && (
                  <div className="circle-logo">{getInitial(job.companyName)}</div>
                )}              </div>
              <button className="time">24h ago</button>

            </div>
            <h3 className="job-title">{job.jobtitle}</h3>
            <div className="job-details">
              <p>
                 <img src={image1} className="img-icon" alt="" />{" "}
            <span>1-3 yr Exp</span>
              </p>
              <p>
            <img src={image2} className="img-icon" alt="" /> <span>{job.jobTypes}</span>
              </p>
              <p>
              <img src={image3} className="img-icon" alt="" /> <span>{Math.floor(job.salaryMax / 100000)} LPA</span>
              </p>
            </div>
            <div className="job-description">
              <ul>
                {job.jobDescription.split("\n").map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
            <button className="apply">Apply Now</button>
          </div>

        ))
      ) : (
        <div className="no-jobs">No jobs match your filters.</div>
      )}
      
    </div>
  );
}

export default Home

