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
});
