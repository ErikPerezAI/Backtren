import { pool } from "../database.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const createUserService = async ({
  name,
  email,
  password,
  role,
}) => {
  // Verificar si el email ya existe
  const existingUser = await pool.query(
    `
    SELECT id
    FROM users
    WHERE email = $1
      AND deleted_at IS NULL
    `,
    [email]
  );

  if (existingUser.rows.length > 0) {
    throw new Error("Email already registered");
  }

  // Hash de la contraseña
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  // Crear usuario
  const result = await pool.query(
    `
    INSERT INTO users (
      name,
      email,
      password_hash,
      role
    )
    VALUES ($1, $2, $3, $4)
    RETURNING
      id,
      name,
      email,
      role,
      created_at,
      updated_at
    `,
    [name, email, passwordHash, role]
  );

  return result.rows[0];
};