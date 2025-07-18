// const express = require("express");
// const Cors = require("cors");
// const { default: mongoose } = require("mongoose");
// const customer = require("./modal/modal");
// const Job = require("./modal/modal");
// require("dotenv").config();


// const app = express();
// app.use(Cors());
// app.use(express.json());
// const Port = 8080;

// // db

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("mongodb connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // get
// app.get("/", (req, res) => {
//   res.send("Ready to send data");
// });

// app.post("/jobs", async (req, res) => {
//   try {
//     const { jobtitle, companyName, location, jobTypes, salaryRange, jobDescription } = req.body;

//     if (!jobtitle || !companyName || !location || !jobTypes || !salaryMin || !salaryMax  || !jobDescription) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newJob = new Job({ jobtitle, companyName, location, jobTypes, salaryRange, jobDescription });
//     await newJob.save();
//     res.status(200).json({ message: "Job posted successfully" });
//   } catch (err) {
//     console.error("Job save error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Running env
// app.listen(Port, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(`Server running on port ${Port}`);
//   }
// });
const express = require("express");
const Cors = require("cors");
const mongoose = require("mongoose");
const Job = require("./modal/modal");
require("dotenv").config();

const app = express();
app.use(Cors());
app.use(express.json());

const Port = process.env.PORT || 8080;  // use 8080 if 5000 is busy

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {console.error("Mongo Error:", err.message)
    process.exit(1)
  });

// Routes
// app.get("/", (req, res) => res.send("API Working"));
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
