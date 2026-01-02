// src/controllers/task.controller.js
import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.user.id });
  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
