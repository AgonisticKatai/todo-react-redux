const User = require('../../../models/User')

function registerUser (req, res) {
  const { username, password } = req.body
  const account = new User({ username })

  User.register(account, password, (err, user) => {
    if (err) {
      return res.status(500).json({err})
    }
    res.status(200).json(User)
  })
}

module.exports = registerUser
