const express = require("express");
const router = express.Router();

const passport = require("../../config/passport");
const { getPendingTasks } = require("../private/handlers/getPendingTasks");
const {
  captureAddTaskParams,
  addTask,
  addTaskResultOk
} = require("../private/handlers/addTask");

router.use(passport.authenticate("jwt", { session: false }));

router.get("/tasks/pending", getPendingTasks);
router.put("/task/add", captureAddTaskParams, addTask, addTaskResultOk);

module.exports = router;
