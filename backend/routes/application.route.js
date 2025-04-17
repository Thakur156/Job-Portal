import express from "express";

import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  appliedJobs,
  applyJob,
  changeApplicationStatus,
  getApplicants,
} from "../controllers/application.controller.js";
const router = express.Router();

router.use(isAuthenticated);

router.post("/applyJob/:jobId", applyJob);
router.get("/get-Applicants/:jobId", getApplicants);
router.get("/applied-jobs", appliedJobs);
router.patch("/change-status/:applicationId", changeApplicationStatus);

export default router;
