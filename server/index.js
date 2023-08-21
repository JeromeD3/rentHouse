require('dotenv').config() // 获取环境变量

const express = require('express')
const app = express()
const cors = require('cors')
const CookieParser = require('cookie-parser')
const port = process.env.PORT
const secret = process.env.SECRET
app.set('secret', secret)

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))
// 将打包好的前端项目静态资源托管到服务器
// app.use('/', express.static(__dirname + '/web'))
// app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(express.json())
app.use(CookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

require('./plugins/db')()
require('./routes/admin')(app)
require('./routes/web')(app)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
