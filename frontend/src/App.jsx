import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobForm from './components/JobForm'
import "./App.css"

const App = () => {

  const [showJobForm, setShowJobForm] = useState(false)

  const openForm = () => setShowJobForm(true);
  const closeForm = () => setShowJobForm(false);

  return (
    <div>
      <Navbar onCreateJobClick={openForm} />
      {showJobForm && (
        <div className="overlay" onClick={closeForm}>
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            <JobForm />
          </div>
        </div>
      )}
      <Home />
    </div>
  );
}

export default App
