import express from "express";

import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  registerCompany,
  userCompanies,
  singleCompany,
  updateCompany,
} from "../controllers/company.controller.js";
const router = express.Router();

router.post("/register", registerCompany);
router.get("/companies", userCompanies);
router.get("/single-comapny/:id", isAuthenticated, singleCompany);
router.patch("/update/:id", isAuthenticated, updateCompany);

export default router;
