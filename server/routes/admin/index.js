const router = require('express').Router({
  mergeParams: true, //合并参数 为了下面获取模型 不然req.params获取不到参数
})

const authMiddleWare = require('../../middleware/auth') // 中间件：校验token
const resourceMiddleWare = require('../../middleware/resource') // 中间件：更改模型名称
const createCRUD = require('./createCRUD')
const upload = require('./upload')
const login = require('./login')

const returnError = async (err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    message: err.message,
  })
}

/**
 * 主要提供接口给后台管理
 */
const Index = (app) => {
  // 通用的crud接口

  app.use('/admin/api/rest/:resource', authMiddleWare(), resourceMiddleWare(), router) // 路由：通用crud接口
  createCRUD(router)

  // 上传接口
  upload(app)

  // 登录接口
  login(app)
  // 访问接口错误处理
  app.use(returnError)
}

module.exports = Index
