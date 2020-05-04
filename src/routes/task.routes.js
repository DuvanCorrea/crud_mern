const express = require("express");
const Task = require("../models/task.model");
const router = express.Router();
require("../database");

router.get("/", async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks);
});

router.get("/task", async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks);
});

router.get("/task/:id", async (req, res) => {
  const task = await Task.findOne({ _id: id })
  res.json(task);
});

router.post("/task", async (req, res) => {
  const { title, description } = req.body
  const task = new Task({
    title,
    description
  })
  await task.save();
  res.json({ status: "saved" })
})

router.put("/task/:id", async (req, res) => {
  const { title, description, finish } = req.body
  const task = new Task({
    title,
    description,
    finish
  })
  await Task.updateOne({ _id: this.param.id }, { task })
  res.json({ status: "updated" })
})

router.delete("/task/:id", async (req, res) => {
  await Task.findOneAndDelete({ _id: this.param.id })
  res.json({ status: "updated" })
})

module.exports = router;
