import { Company } from "../models/company.model.js";

import asyncHandler from "../utils/asyncHandler.js";

//register company
export const registerCompany = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const existingCompany = await Company.findOne({ name });
  if (existingCompany) {
    return res
      .status(400)
      .json({ message: "Company already exists", success: false });
  }

  const userId = req.id;

  const company = await Company.create({ name, userId });
  if (!company) {
    return res
      .status(400)
      .json({ message: "Company not created", success: false });
  }

  return res.status(201).json({
    message: "Company created successfully",
    success: true,
    company,
  });
});

export const userCompanies = asyncHandler(async (req, res) => {
  const userId = req.id;
  if (!userId) {
    return res
      .status(400)
      .json({ message: "User ID not provided", success: false });
  }
  const companies = await Company.find({ userId });
  if (!companies) {
    return res
      .status(400)
      .json({ message: "No companies found", success: false });
  }
  return res.status(200).json({
    message: "Companies fetched successfully",
    success: true,
    companies,
  });
});

export const singleCompany = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Company ID not provided" });
  }
  const company = await Company.findById(id);
  if (!company) {
    return res.status(400).json({ message: "Company not found" });
  }
  return res.status(200).json({
    message: "Company fetched successfully",
    success: true,
    company,
  });
});

export const updateCompany = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, website, location } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Company ID not provided" });
  }

  const company = await Company.findByIdAndUpdate(
    id,
    { name, description, website, location },
    { new: true }
  );

  if (!company) {
    return res.status(400).json({ message: "Company not found" });
  }

  return res.status(200).json({
    message: "Company updated successfully",
    success: true,
    company,
  });
});
