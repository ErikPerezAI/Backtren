import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getTeacherSubjects,
  getStudentSubjects,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Consultar relaciones ("Dictan" y "Cursan") asociadas al usuario
router.get("/teachers/:id/subjects", getTeacherSubjects);
router.get("/students/:id/subjects", getStudentSubjects);

export default router;