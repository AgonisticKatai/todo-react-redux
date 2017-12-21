const express = require("express");
const router = express.Router();

const passport = require("../../config/passport");
const { getPendingTasks } = require("../private/handlers/getPendingTasks");
const { captureAddTaskParams, addTask, addTaskResultOk } = require("../private/handlers/addTask");
const { captureRemoveTaskParams, removeTask, removeTaskResultOk } = require("../private/handlers/removeTask")

router.use(passport.authenticate("jwt", { session: false }));

router.get("/tasks/pending", getPendingTasks);
router.put("/task/add", captureAddTaskParams, addTask, addTaskResultOk);
router.delete("/task/remove/:id", captureRemoveTaskParams, removeTask, removeTaskResultOk);

module.exports = router;
