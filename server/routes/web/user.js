const jwt = require('jsonwebtoken')

const user = (router, app) => {
  router.get('/profile', (req, res) => {
    const { token } = req.cookies

    if (!token) {
      return res.status(401).send({
        message: 'token不存在'
      })
    }

    jwt.verify(token, app.get('secret'), (err, decoded) => {
      if (err) throw err
      res.json(decoded)
    })
  })
}

module.exports = user
