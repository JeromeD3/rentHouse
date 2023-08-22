const multer = require('multer')
const auth = require('../../../middleware/auth') // 中间件：校验token
const fs = require('fs')
/**
 * 上传路径
 */
const uploadPath = multer({ dest: 'uploads/' })

const upload = (app) => {
  //single的字段要和文件的key值保持一致
  app.post('/upload', auth(), uploadPath.array('photos', 100), async (req, res) => {
    // 多文件上传
    console.log(req)
    const uploadedfiles = []
    for (const file of req.files) {
      const { path, originalname } = file

      const parts = originalname.split('.')
      const ext = parts[parts.length - 1]
      const newPath = path + '.' + ext
      fs.renameSync(path, newPath)
      uploadedfiles.push(newPath.replace('uploads/', ''))
    }
    console.log(uploadedfiles);

    // 图片回显
    res.send(uploadedfiles)
  })
}

module.exports = upload
