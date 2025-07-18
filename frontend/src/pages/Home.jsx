import React, { useEffect, useState } from 'react'
import "./Home.css"
import amazon from "../assets/amazon-logo.png"
import tesla from "../assets/tesla-logo.png"
import swiggy from "../assets/swiggy-logo.png"
import  axios from "axios"

const Home = () => {

   const [jobs, setJobs] = useState([])
   useEffect(() => {
     const fetchJobs = async () => {
       try {
         const res = await axios.get("http://localhost:8080/jobs");
         setJobs(res.data);
       } catch (err) {
         console.error("Error fetching jobs:", err);
       }
     };

     fetchJobs();
   }, []);

   const getInitial = (companyName) => {
     return companyName ? companyName.charAt(0).toUpperCase() : "C";
   };

  return (
    <div className="filter">
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

      {jobs.map((job, index) => (
        <div className="box" key={index}>
          <div className="box-header">
            <div className="img-box">
              <div className="circle-logo">{getInitial(job.companyName)}</div>
            </div>
            <button className="time">24h ago</button>
          </div>
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
              <li>{job.jobDescription}</li>
            </ul>
          </div>
          <button className="apply">Apply Now</button>
        </div>
      ))}
    </div>
  );
}

export default Home
