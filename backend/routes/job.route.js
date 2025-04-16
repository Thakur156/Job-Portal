import express from "express";

import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  adminJobs,
  getAllJobs,
  getSingleJob,
  postJob,
} from "../controllers/jb.controller.js";

const router = express.Router();

router.use(isAuthenticated);

router.post("/post", postJob);
router.get("/get", getAllJobs);
router.get("/get-single/:id", getSingleJob);
router.get("/get-admin-jobs", adminJobs);

export default router;
