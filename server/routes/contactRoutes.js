import { Router } from "express";
import { createContact } from "../controllers/contactController.js";
import { validateBody } from "../middleware/validate.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validateContact } from "../utils/validate.js";

const router = Router();

router.post("/", validateBody(validateContact), asyncHandler(createContact));

export default router;
