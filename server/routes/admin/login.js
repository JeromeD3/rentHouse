const assert = require('http-assert')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')

const login = (app) => {
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    //1.找用户
    /* select是mongoose的API*/
    const user = await User.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')

    //2.校验密码
    const isValid = bcrypt.compareSync(password, user.password)
    assert(isValid, 422, '密码错误！')

    //3.返回token
    /*生成token*/
    /*用什么数据来生成token*/
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token, username })
  })
}

module.exports = login

/**
 * assert
 */
// 用法：
// assert() --> 判断，状态码，错误信息

// 相当于：
// if(!user) {
//   return res.status(422).send({
//     message: '用户不存在'
//   })
// }
