import express from "express";

import * as CompanyController from '../controllers/CompanyController.js';

const router = express.Router();

// Route: /company
router.get("", CompanyController.GetCompanies);

export default router;