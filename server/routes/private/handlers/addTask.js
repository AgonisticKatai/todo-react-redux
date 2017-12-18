const User = require("../../../models/User.js");

function captureAddTaskParams(req, res, next) {
  const { _id } = req.user;
  const { title, content } = req.body;
  req.data = { _id, title, content };
  next();
}

async function addTask(req, res, next) {
  const { _id, title, content } = req.data;
  try {
    await User.findByIdAndUpdate(
      _id,
      {
        $push: { tasks: { title: title, content: content } }
      },
      { new: true }
    );
    next();
  } catch (error) {
    const msg = "problems in addTask...";
    res.status(500).json({ error, msg });
  }
}

async function addTaskResultOk(req, res) {
  res.status(200).json({ msg: "task added properly..." });
}

module.exports = { captureAddTaskParams, addTask, addTaskResultOk };
