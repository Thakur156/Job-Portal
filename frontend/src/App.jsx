import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./common/Navbar.jsx";
import { ToastContainer } from "react-toastify";
import Jobs from "./components/Jobs.jsx";
import Explore from "./components/Explore.jsx";
import Profile from "./components/Profile.jsx";
import AppliedJobs from "./components/AppliedJobs.jsx";
import JobDescription from "./components/JobDescription.jsx";
const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />
        <Route path="/job/description/:id" element={<JobDescription />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
