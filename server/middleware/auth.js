const jwt = require('jsonwebtoken')
const assert = require('http-assert')

const auth = () => {
  const User = require('../models/User')
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '')
      .split(' ')
      .pop()
    assert(token, 401, '请先提供token！')
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(token, 401, '无效的id')
    req.user = await User.findById(id)
    assert(req.user, 401, '请先登陆！')
    await next()
  }
}
module.exports = auth
