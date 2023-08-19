const multer = require('multer')
const authMiddleWare = require('../../middleware/auth') // 中间件：校验token

/**
 * 上传路径
 */
const uploadPath = multer({ dest: __dirname + '/../../uploads' })

const upload = (app) => {
  //single的字段要和文件的key值保持一致
  app.post('/admin/api/upload', authMiddleWare(), uploadPath.single('file'), async (req, res) => {
    /*单个文件上传 */
    const file = req.file
    // 图片回显
    file.url = `${process.env.DEV_HOST}/${file.filename}`
    console.log(file)
    res.send(file)
  })
}

module.exports = upload
