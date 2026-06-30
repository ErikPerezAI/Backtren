import { Router } from "express";
import {
  enrollStudent,
  unenrollStudent,
  getSubjectStudents,
} from "../controllers/enrollment.controller.js";

const router = Router();

router.post("/", enrollStudent);
router.delete("/", unenrollStudent);
router.get("/subject/:id", getSubjectStudents);

export default router;
