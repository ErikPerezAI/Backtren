import { pool } from "../database.js";

export const checkDatabase = async () => {
  try {
    await pool.query("SELECT 1");
    return true;
  } catch {
    return false;
  }
};