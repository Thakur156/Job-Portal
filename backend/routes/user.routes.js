import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.put("/update", isAuthenticated, updateProfile);

export default router;
