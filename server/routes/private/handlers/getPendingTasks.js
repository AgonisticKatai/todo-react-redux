const User = require('../../../models/User.js')

async function getPendingTasks (req, res) {
  const { _id } = req.user
  const tasks = await User.findById(_id, 'tasks', (err, tasks) => {
    if (err) return err
    return tasks
  })
  res.json(tasks)
}

module.exports = { getPendingTasks }