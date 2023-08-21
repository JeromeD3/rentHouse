const imageDownloader = require('image-downloader')
const path = require('path')
const uploadByLink = (router) => {
  router.post('/uploadByLink', async (req, res) => {
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
