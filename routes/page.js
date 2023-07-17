import express from "express";
const router = express.Router();

import {
  homeRoutes,
  getAddProperty,
  getAddSignUp,
  getPropertySearch,
  getPropertyDetails,
  dashboard,
} from "../controller/page.js";

router.get("/", homeRoutes);
router.get("/add-property", getAddProperty);
router.get("/agent-sign-up", getAddSignUp);
router.post("/search-data", getPropertySearch);
router.get("/property/:id", getPropertyDetails);
router.get("/dashboard/", dashboard);

export default router;
