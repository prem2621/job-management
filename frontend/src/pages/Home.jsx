import React, {  useState } from 'react'
import "./Home.css"
import amazon from "../assets/amazon-logo.png"
import tesla from "../assets/tesla-logo.png"
import swiggy from "../assets/swiggy-logo.png"
<<<<<<< Updated upstream

const Home = ({jobs}) => {
=======
import image1 from "../assets/image-1.png"
import image2 from "../assets/image-2.png"
import image3 from "../assets/image-3.png"

const Home = ({jobs,filteredJobs}) => {
>>>>>>> Stashed changes

   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

 
   const getInitial = (companyName) => {
     return companyName ? companyName.charAt(0).toUpperCase() : "C";
   };

  return (
    <div className="filter">

      {loading && <div className="loading">Loading additional jobs...</div>}
      {error && <div className="error">{error}</div>}


<<<<<<< Updated upstream
      <div className="box">
        <div className="box-header">
          <div className="img-box">
            <img src={amazon} alt="" />
          </div>
          <button className="time">24h Ago</button>
        </div>
        <h3 className="job-title">Full Stack Developer</h3>
        <div className="job-details">
          <p>
            <i className="fa-regular fa-user"></i> 1–3 yr Exp
          </p>
          <p>
            <i className="fa-regular fa-building"></i> Onsite
          </p>
          <p>
            <i className="fa-solid fa-layer-group"></i> 12LPA
          </p>
        </div>
        <div className="job-description">
          <ul>
            <li>
              A user-friendly iterface lets you browse stunning photos and
              videos
            </li>
            <li>
              Filter desinations based on interests and travel style, and create
              personalized
            </li>
          </ul>
        </div>
        <button className="apply">Apply Now</button>
      </div>

      <div className="box">
        <div className="box-header">
          <div className="img-box">
            <img src={tesla} alt="" />
          </div>
          <button className="time">24h Ago</button>
        </div>
        <h3 className="job-title">Node Js Developer</h3>
        <div className="job-details">
          <p>
            <i className="fa-regular fa-user"></i> 1–3 yr Exp
          </p>
          <p>
            <i className="fa-regular fa-building"></i> Onsite
          </p>
          <p>
            <i className="fa-solid fa-layer-group"></i> 12LPA
          </p>
        </div>
        <div className="job-description">
          <ul>
            <li>
              A user-friendly iterface lets you browse stunning photos and
              videos
            </li>
            <li>
              Filter desinations based on interests and travel style, and create
              personalized
            </li>
          </ul>
        </div>
        <button className="apply">Apply Now</button>
      </div>

      <div className="box">
        <div className="box-header">
          <div className="img-box">
            <img src={swiggy} alt="" />
          </div>
          <button className="time">24h Ago</button>
        </div>
        <h3 className="job-title">UX/UI Designer</h3>
        <div className="job-details">
          <p>
            <i className="fa-regular fa-user"></i> 1–3 yr Exp
          </p>
          <p>
            <i className="fa-regular fa-building"></i> Onsite
          </p>
          <p>
            <i className="fa-solid fa-layer-group"></i> 12LPA
          </p>
        </div>
        <div className="job-description">
          <ul>
            <li>
              A user-friendly iterface lets you browse stunning photos and
              videos
            </li>
            <li>
              Filter desinations based on interests and travel style, and create
              personalized
            </li>
          </ul>
        </div>
        <button className="apply">Apply Now</button>
      </div>

      <div className="box">
        <div className="box-header">
          <div className="img-box">
            <img src={amazon} alt="" />
          </div>
          <button className="time">24h Ago</button>
        </div>
        <h3 className="job-title">Full Stack Developer</h3>
        <div className="job-details">
          <p>
            <i className="fa-regular fa-user"></i> 1–3 yr Exp
          </p>
          <p>
            <i className="fa-regular fa-building"></i> Onsite
          </p>
          <p>
            <i className="fa-solid fa-layer-group"></i> 12LPA
          </p>
        </div>
        <div className="job-description">
          <ul>
            <li>
              A user-friendly iterface lets you browse stunning photos and
              videos
            </li>
            <li>
              Filter desinations based on interests and travel style, and create
              personalized
            </li>
          </ul>
        </div>
        <button className="apply">Apply Now</button>
      </div>

      <div className="box">
        <div className="box-header">
          <div className="img-box">
            <img src={tesla} alt="" />
          </div>
          <button className="time">24h Ago</button>
        </div>
        <h3 className="job-title">Node Js Developer</h3>
        <div className="job-details">
          <p>
            <i className="fa-regular fa-user"></i> 1–3 yr Exp
          </p>
          <p>
            <i className="fa-regular fa-building"></i> Onsite
          </p>
          <p>
            <i className="fa-solid fa-layer-group"></i> 12LPA
          </p>
        </div>
        <div className="job-description">
          <ul>
            <li>
              A user-friendly iterface lets you browse stunning photos and
              videos
            </li>
            <li>
              Filter desinations based on interests and travel style, and create
              personalized
            </li>
          </ul>
        </div>
        <button className="apply">Apply Now</button>
      </div>

   
      {loading && <div className="loading">Loading additional jobs...</div>}
      {error && <div className="error">{error}</div>}

      {jobs.map((job) => (
        <div className="box" key={job._id}>
          <div className="box-header">
            <div className="img-box">
              <div className="circle-logo">{getInitial(job.companyName)}</div>
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <h3 className="job-title">{job.jobtitle}</h3>
          <div className="job-details">
            <p>
              <i className="fa-regular fa-user"></i> 1-3 yr Exp
            </p>
            <p>
              <i className="fa-regular fa-building"></i> {job.jobTypes}
            </p>
            <p>
              <i className="fa-solid fa-layer-group"></i>{" "}
              {Math.floor(job.salaryMax / 100000)} LPA
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
      ))}
=======
        ))
      ) : (
        <div className="no-jobs">No jobs match your filters.</div>
      )}
      
>>>>>>> Stashed changes
    </div>
  );
}

export default Home

