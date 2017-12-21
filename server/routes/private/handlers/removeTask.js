const User = require("../../../models/User.js");

function captureRemoveTaskParams(req, res, next) {
  const { _id } = req.user;
  const { id } = req.params;
  req.data = { _id, id };
  next();
}

async function removeTask(req, res, next) {
  const { _id, id } = req.data;
  try {
    await User.findByIdAndUpdate(_id, {
      $pull: { tasks: { _id: id } }
    });
    next();
  } catch (error) {
    const msg = "problems in removeTask...";
    res.status(500).json({ error, msg });
  }
}

function removeTaskResultOk(req, res) {
  res.status(200).json({ msg: "task removed properly..." });
}

module.exports = {
  captureRemoveTaskParams,
  removeTask,
  removeTaskResultOk
};
