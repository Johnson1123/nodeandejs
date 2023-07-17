import express from "express";

const router = express.Router();
// const { postAgent, postProperties } = require("../controller/auth.js");
import { addProperty, addAgent, deleteProperty } from "../controller/auth.js";

router.post("/add-agent", addAgent);
router.post("/add-property", addProperty);
router.post("/delete-property", deleteProperty);

export default router;
