import express from "express";
import cors from "cors";
import morgan from "morgan";

import healthRoutes from "./router/health.route.js";
import userRoutes from "./router/user.route.js";
import subjectRoutes from "./router/subject.route.js";
import enrollmentRoutes from "./router/enrollment.route.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/users", userRoutes);
app.use("/subjects", subjectRoutes);
app.use("/enrollments", enrollmentRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "online",
    message: "API de Backtren funcionando perfectamente",
  });
});

export default app;