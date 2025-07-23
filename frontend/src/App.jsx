import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobForm from './components/JobForm'
import "./App.css"
import axios from 'axios'

const App = () => {

  const [showJobForm, setShowJobForm] = useState(false)
  const [jobs,setJobs] = useState([])
<<<<<<< Updated upstream
=======
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    jobType: "",
    salary: 0,
  });
  const defaultJobs = [
    {
      _id: "1",
      companyName: "Amazon",
      jobtitle: "Full Stack Developer",
      location: "Bengaluru",
      jobTypes: "Full-time",
      salaryMax: 200000, 
      jobDescription:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style",
    },
    {
      _id: "2",
      companyName: "Tesla",
      jobtitle: "Node Js Developer",
      location: "Hyderabad",
      jobTypes: "Full-time",
      salaryMax: 300000,
      jobDescription:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style",
    },
    {
      _id: "3",
      companyName: "Swiggy",
      jobtitle: "UI/UX Developer",
      location: "Chennai",
      jobTypes: "Full-time",
      salaryMax: 400000,
      jobDescription:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style",
    },
    {
      _id: "4",
      companyName: "Amazon",
      jobtitle: "Full Stack Developer",
      location: "Bengaluru",
      jobTypes: "Full-time",
      salaryMax: 500000, 
      jobDescription:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style",
    },
    {
      _id: "5",
      companyName: "Tesla",
      jobtitle: "Node Js Developer",
      location: "Hyderabad",
      jobTypes: "Full-time",
      salaryMax: 600000,
      jobDescription:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style",
    },
    {
      _id: "6",
      companyName: "Swiggy",
      jobtitle: "UI/UX Developer",
      location: "Chennai",
      jobTypes: "Full-time",
      salaryMax: 700000,
      jobDescription:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style",
    },
    {
      _id: "7",
      companyName: "Amazon",
      jobtitle: "Full Stack Developer",
      location: "Bengaluru",
      jobTypes: "Full-time",
      salaryMax: 800000, 
      jobDescription:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style",
    },
    {
      _id: "8",
      companyName: "Tesla",
      jobtitle: "Node Js Developer",
      location: "Hyderabad",
      jobTypes: "Full-time",
      salaryMax: 900000,
      jobDescription:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style",
    },
  ];


>>>>>>> Stashed changes

  const openForm = () => setShowJobForm(true);
  const closeForm = () => setShowJobForm(false);

  const fetchJobs = async () => {
    console.log("Fetching Jobs...");
    try {
<<<<<<< Updated upstream
       const res = await axios.get("https://job-management-backend-u9w6.onrender.com/jobs");
       console.log("Jobs Fetched",res.data );
      setJobs(res.data);
=======
       const res = await axios.get("http://localhost:8080/jobs");
       console.log("Jobs Fetched",res.data );
       const apiJobs = res.data.map((job) => ({
         ...job,
         salaryMax: job.salaryMax || job.salary, 
       }));
       setJobs(apiJobs);
     
>>>>>>> Stashed changes
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(()=>{
    fetchJobs()
  },[])

<<<<<<< Updated upstream
=======

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredJobs = [...defaultJobs, ...jobs].filter((job) => {
    const matchKeyword = job.jobtitle.toLowerCase().includes(filters.keyword.toLowerCase());
    const matchLocation = filters.location ? job.location === filters.location : true;
    const matchJobType = filters.jobType ? job.jobTypes === filters.jobType : true;
    const matchSalary = filters.salary 
    ? (job.salaryMax >= filters.salary) 
    : true;
  
    return matchKeyword && matchLocation && matchJobType && matchSalary;
  });

>>>>>>> Stashed changes
  return (
    <div>
      <Navbar onCreateJobClick={openForm} filters={filters} onFilterChange={handleFilterChange}/>
      {showJobForm && (
        <div className="overlay" onClick={closeForm}>
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            <JobForm closeForm={closeForm} fetchJobs={fetchJobs}/>
          </div>
        </div>
      )}
<<<<<<< Updated upstream
      <Home jobs={jobs}/>
=======
      <Home jobs={jobs} filteredJobs={filteredJobs}/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App
