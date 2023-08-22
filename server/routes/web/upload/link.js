const imageDownloader = require('image-downloader')
const path = require('path')
const auth = require('../../../middleware/auth') // 中间件：校验token

const uploadByLink = (router) => {
  router.post('/uploadByLink', auth(), async (req, res) => {
    const { link } = req.body
    console.log(link);

    const newName = 'photo' + Date.now() + '.jpg'
    const dest = path.resolve(__dirname, '../../../') + '/uploads/' + newName

    await imageDownloader.image({
      url: link,
      dest: dest
    })

    res.json({ filename: newName })
  })
}

module.exports = uploadByLink
