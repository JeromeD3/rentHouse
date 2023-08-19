const inflection = require('inflection')
const changeModelName = inflection.classify

const Index = () => {
  /**
   * 访问路由的某个api时首先先对所操作的模型名称进行转换
   * 模型的命名规范：单数，首字母大写
   * 请求接口类型：小写、复数
   * 转换成大写、单数
   */

  return async (req, res, next) => {
    const modelName = changeModelName(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}
module.exports = Index
