module.exports = () => {
  const mongoose = require('mongoose')
  mongoose.connect(process.env.MONGODB_URL)
  // 连接后需要导入所有的模型
  require('require-all')(__dirname + '/../models')
}
