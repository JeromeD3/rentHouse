const { model } = require('mongoose')
const assert = require('http-assert')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = model('User')


const auth = (router, app) => {
  router.post('/register', async (req, res) => {
    const { username, email, password } = req.body

    try {
      const user = await User.create({
        username,
        email,
        password
      })
      assert(user, 422, '用户创建失败,请确认信息是否正确')
      res.json(user)
    } catch (err) {
      res.status(422).send(err.message)
    }
  })

  router.post('/login', async (req, res) => {
    const { username, password } = req.body
    //1.找用户
    /* select是mongoose的API*/
    try {
      const user = await User.findOne({ username }).select('+password')
      assert(user, 422, '用户不存在')

      //2.校验密码
      const isValid = bcrypt.compareSync(password, user.password)
      assert(isValid, 422, '密码错误！')

      //3.返回token
      /*生成token*/
      const token = jwt.sign({ id: user._id, username: user.username }, app.get('secret'))
      assert(token, 422, 'token生成失败')
      res.cookie("token", token).send({ username })
    } catch (error) {
      console.log("Error", error);
      res.status(422).send(error)
    }
  })

  router.post('/logout', (req, res) => {
    res.cookie("token", "").json(true)
  })
}
module.exports = auth;
