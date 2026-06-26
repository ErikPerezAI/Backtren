import { pool } from "../database.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const createUserService = async ({
  nombre,
  email,
  password,
  rol,
}) => {
  const existingUser = await pool.query(
    `
    SELECT id
    FROM usuarios
    WHERE email = $1
    `,
    [email]
  );

  if (existingUser.rows.length > 0) {
    throw new Error("Email already registered");
  }

  const passwordHash = await bcrypt.hash(
    password,
    SALT_ROUNDS
  );

  const result = await pool.query(
    `
    INSERT INTO usuarios (
      nombre,
      email,
      password_hash,
      rol
    )
    VALUES ($1, $2, $3, $4)
    RETURNING
      id,
      nombre,
      email,
      rol,
      created_at,
      updated_at
    `,
    [nombre, email, passwordHash, rol]
  );

  return result.rows[0];
};