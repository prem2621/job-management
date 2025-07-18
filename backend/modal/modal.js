// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     fullname: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     subject: {
//       type: String,
//       required: true,
//     },
//     messages: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     collection: "customer",
//     versionKey: false,
//   }
// );
// module.exports = mongoose.model("customer", userSchema);

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobtitle: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobTypes: {
      type: String,
      required: true,
    },
    salaryMin: {
      type: String,
      required: true,
    },
    salaryMax: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },
  {
    collection: "jobs", // new collection name
    versionKey: false,
  }
);

module.exports = mongoose.model("Job", jobSchema);
