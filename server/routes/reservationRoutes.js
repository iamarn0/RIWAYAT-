import { Router } from "express";
import { createReservation } from "../controllers/reservationController.js";
import { validateBody } from "../middleware/validate.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validateReservation } from "../utils/validate.js";

const router = Router();

router.post("/", validateBody(validateReservation), asyncHandler(createReservation));

export default router;
