const jwt = require('jsonwebtoken')
const User = require('../../models/User')

const user = (router, app) => {
  router.get('/profile', (req, res) => {
    const { token } = req.cookies

    if (!token) {
      return res.status(401).send({
        message: 'token不存在'
      })
    }

    jwt.verify(token, app.get('secret'), async(err, decoded) => {
      if (err) throw err
      const user = await User.findById(decoded.id)
      res.json(user)
    })
  })
}

module.exports = user
