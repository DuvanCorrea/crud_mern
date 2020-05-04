const express = require("express");
const Task = require("../models/task.model");
const router = express.Router();
require("../database");

router.get("/task", async (req, res) => {

  const tasks = await Task.find()
  console.log(task)

});

module.exports = router;
