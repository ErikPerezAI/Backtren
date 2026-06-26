import { createUserService } from "../services/user.service.js";
import { pool } from "../database.js";

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    const user = await createUserService({
      nombre,
      email,
      password,
      rol,
    });

    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");

    return res.json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};