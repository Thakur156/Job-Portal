import { Job } from "../models/job.model.js";

import AsyncHandler from "../utils/asyncHandler.js";

//post by admin

export const postJob = AsyncHandler(async (req, res) => {
  const {
    title,
    description,
    salary,
    requirements,
    location,
    experienceLevel,
    jobType,
    position,
    company,
  } = req.body;
  if (
    !title ||
    !description ||
    !salary ||
    !requirements ||
    !location ||
    !experienceLevel ||
    !jobType ||
    !position ||
    !company
  ) {
    return res
      .status(400)
      .json({ message: "All fields are required", success: false });
  }

  const userId = req.id;
  if (!userId) {
    return res.status(400).json({ message: "User ID not provided" });
  }

  const job = await Job.create({
    title,
    description,
    salary,
    requirements: requirements.split(","),
    location,
    experienceLevel,
    jobType,
    position: Number(position),
    company,
    created_by: userId,
  });

  if (!job) {
    return res.status(400).json({ message: "Job not created" });
  }

  return res.status(201).json({
    message: "Job created successfully",
    success: true,
    job,
  });
});

export const getAllJobs = AsyncHandler(async (req, res) => {
  const keyword = req.query.keyword || "";

  const query = {
    $or: [
      { title: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
    ],
  };

  const jobs = await Job.find(query).populate({ path: "company" }).sort({
    createdAt: -1,
  });
  if (!jobs.length) {
    return res.status(400).json({ message: "No jobs found" });
  }

  return res.status(200).json({
    message: "Jobs fetched successfully",
    success: true,
    jobs,
  });
});

export const getSingleJob = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Job ID not provided" });
  }
  const job = await Job.findById(id);
  if (!job) {
    return res.status(400).json({ message: "Job not found" });
  }
  return res.status(200).json({
    message: "Job fetched successfully",
    success: true,
    job,
  });
});

//admin jobs

export const adminJobs = AsyncHandler(async (req, res) => {
  const adminId = req.id;
  if (!adminId) {
    return res.status(400).json({ message: "Admin ID not provided" });
  }
  const jobs = await Job.find({ created_by: adminId });
  if (!jobs.length > 0) {
    return res.status(400).json({ message: "No jobs found" });
  }
  return res.status(200).json({
    message: "Jobs fetched successfully",
    success: true,
    jobs,
  });
});
