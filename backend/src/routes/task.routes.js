// src/routes/task.routes.js
import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = express.Router();

router.use(protect);
router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
