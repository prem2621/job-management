<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
const express = require("express");
const Cors = require("cors");
const mongoose = require("mongoose");
const Job = require("./modal/modal");
require("dotenv").config();

const app = express();
app.use(Cors());
app.use(express.json());

const Port = process.env.PORT || 8080; 

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {console.error("Mongo Error:", err.message)
    process.exit(1)
  });

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error("Fetch Error:", err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});


app.post("/jobs", async (req, res) => {
  try {
    const { jobtitle, companyName, location, jobTypes, salaryMin, salaryMax, jobDescription } = req.body;

    if (!jobtitle || !companyName || !location || !jobTypes || !salaryMin || !salaryMax || !jobDescription) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newJob = new Job({ jobtitle, companyName, location, jobTypes, salaryMin, salaryMax, jobDescription });
    await newJob.save();
    res.status(200).json({ message: "Job posted" });
  } catch (err) {
    console.error("Save Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(Port, () => console.log(`Server running on port ${Port}`));
