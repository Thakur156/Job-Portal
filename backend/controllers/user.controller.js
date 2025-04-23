import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { uploadCloudinary } from "../utils/cloudinary.js";
export const signup = asyncHandler(async (req, res) => {
  const { name, email, password, phoneNumber, role } = req.body;
  if (
    [name, email, password, phoneNumber, role].some(
      (field) => field?.trim() === ""
    )
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists with this email", success: false });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phoneNumber,
    role,
  });

  if (!user) {
    return res.status(400).json({ message: "User creation failed" });
  }
  return res.status(201).json({
    message: "User created successfully",
    success: true,
    user,
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;
  if ([email, password, role].some((field) => field?.trim() === "")) {
    return res.status(400).json({ message: "All fields are required" });
  }
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not Found" });
  }
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    return res
      .status(400)
      .json({ message: "Invalid credentials", success: false });
  }

  if (role !== user.role) {
    return res.status(400).json({ message: "Invalid Role" });
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  user = {
    _id: user._id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role,
  };
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("token", token, options)
    .json({
      message: `Welcome ${user.name}`,
      success: true,
      user,
      token,
    });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successful", success: true });
});

export const updateProfile = asyncHandler(async (req, res) => {
  const { name, phoneNumber, bio, skills } = req.body;
  const fileLocalPath = req.file?.path;

  const skillsArray = skills?.split(",");
  const userId = req.id;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const resume = await uploadCloudinary(fileLocalPath);
  console.log(resume);
  if (resume) {
    user.profile.resume = resume.secure_url;
    user.profile.resumeName = resume.file.orignalname;
  }
  if (name) user.name = name;
  if (phoneNumber) user.phoneNumber = phoneNumber;
  if (bio) user.profile.bio = bio;
  if (skills) user.profile.skills = skillsArray;

  await user.save();
  return res.status(200).json({
    message: "Profile updated successfully",
    success: true,
    user,
  });
});
