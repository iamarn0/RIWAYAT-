import { Router } from "express";
import { getDbMode } from "../config/db.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "riwayat-api",
    database: getDbMode(),
    time: new Date().toISOString(),
  });
});

export default router;
