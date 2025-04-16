import express from "express";

import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  registerCompany,
  userCompanies,
  singleCompany,
  updateCompany,
} from "../controllers/company.controller.js";
const router = express.Router();

router.use(isAuthenticated);

router.post("/register", registerCompany);
router.get("/companies", userCompanies);
router.get("/single-company/:id", singleCompany);
router.patch("/update/:id", updateCompany);

export default router;
