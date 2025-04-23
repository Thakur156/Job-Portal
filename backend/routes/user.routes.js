import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.post("/signup", upload.single("file"), signup);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.put("/update", isAuthenticated, upload.single("file"), updateProfile);

export default router;
