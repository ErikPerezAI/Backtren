import { Router } from "express";
import {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
  assignTeacher,
} from "../controllers/subject.controller.js";

const router = Router();

router.post("/", createSubject);
router.get("/", getSubjects);
router.get("/:id", getSubjectById);
router.put("/:id", updateSubject);
router.delete("/:id", deleteSubject);

// Relación "Dictan" - Asignar profesor a materia
router.put("/:id/teacher", assignTeacher);

export default router;
