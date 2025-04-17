import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const applyJob = asyncHandler(async (req, res) => {
  const { jobId } = req.params;
  const userId = req.id;
  if (!userId) {
    return res.status(400).json({ message: "User ID not provided" });
  }
  if (!jobId) {
    return res.status(400).json({ message: "Job ID not provided" });
  }

  const alreadyApplied = await Application.findOne({
    applicant: userId,
    job: jobId,
  });
  if (alreadyApplied) {
    return res.status(400).json({
      message: "Already applied for this job",
      success: false,
    });
  }

  const job = await Job.findById(jobId);
  if (!job) {
    return res.status(400).json({ message: "Job not found" });
  }
  const application = await Application.create({
    applicant: userId,
    job: jobId,
  });
  if (!application) {
    return res.status(400).json({ message: "Application failed" });
  }

  // Add the application to the job's applications array
  job.application.push(application._id);
  await job.save();
  return res.status(200).json({
    message: "Job applied successfully",
    success: true,
    application,
  });
});

export const getApplicants = asyncHandler(async (req, res) => {
  const { jobId } = req.params;
  if (!jobId) {
    return res.status(400).json({ message: "Job ID not provided" });
  }
  const applicants = await Job.findById(jobId).populate({
    path: "application",
    populate: {
      path: "applicant",
    },
  });

  if (!applicants) {
    return res.status(400).json({ message: "No applicants found" });
  }

  return res.status(200).json({
    message: "Applicants fetched successfully",
    success: true,
    applicants,
  });
});

export const appliedJobs = asyncHandler(async (req, res) => {
  const userId = req.id;
  if (!userId) {
    return res.status(400).json({ message: "User ID not provided" });
  }
  const appliedJobs = await Application.find({ applicant: userId }).populate({
    path: "job",
    populate: {
      path: "company",
    },
  });

  if (!appliedJobs) {
    return res.status(400).json({ message: "No applications found" });
  }

  return res.status(200).json({
    message: "Applied jobs fetched successfully",
    success: true,
    appliedJobs,
  });
});

export const changeApplicationStatus = asyncHandler(async (req, res) => {
  const { applicationId } = req.params;
  const { status } = req.body;
  if (!applicationId) {
    return res.status(400).json({ message: "Application ID not provided" });
  }
  if (!status) {
    return res.status(400).json({ message: "Status not provided" });
  }
  const application = await Application.findByIdAndUpdate(
    applicationId,
    { status: status.toLowerCase() },
    { new: true }
  );
  if (!application) {
    return res.status(400).json({ message: "Application not found" });
  }

  return res.status(200).json({
    message: "Application status updated successfully",
    success: true,
    application,
  });
});
