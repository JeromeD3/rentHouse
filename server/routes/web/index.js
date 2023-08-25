/**
 * 主要给c端提供接口
 */
const express = require('express')
const Router = express.Router

const auth = require('./auth')
const user = require('./user')
const uploadByLink = require('./upload/link')
const upload = require('./upload')
const place = require('./place')
const booking = require('./booking')

const Index = (app) => {
  const router = Router({
    mergeParams: true, //合并参数 为了下面获取模型 不然req.params获取不到参数
  })

  auth(router, app)
  user(router, app)
  uploadByLink(router)
  upload(router)
  place(router)
  booking(router)
  app.use('/web/api', router)
}
module.exports = Index
