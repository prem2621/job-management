import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobForm from './components/JobForm'
import "./App.css"
import axios from 'axios'

const App = () => {

  const [showJobForm, setShowJobForm] = useState(false)
  const [jobs,setJobs] = useState([])

  const openForm = () => setShowJobForm(true);
  const closeForm = () => setShowJobForm(false);

  const fetchJobs = async () => {
    console.log("Fetching Jobs...");
    try {
       const res = await axios.get("http://localhost:8080/jobs");
       console.log("Jobs Fetched",res.data );
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(()=>{
    fetchJobs()
  },[])

  return (
    <div>
      <Navbar onCreateJobClick={openForm} />
      {showJobForm && (
        <div className="overlay" onClick={closeForm}>
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            <JobForm closeForm={closeForm} fetchJobs={fetchJobs}/>
          </div>
        </div>
      )}
      <Home jobs={jobs}/>
    </div>
  );
}

export default App
