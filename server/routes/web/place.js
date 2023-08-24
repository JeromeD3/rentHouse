const auth = require('../../middleware/auth')
const Place = require('../../models/Place')

const place = (router) => {
  router.post('/places', auth(), async (req, res) => {
    const placeDoc = await Place.create({
      owner: req.user._id,
      ...req.body
    })

    res.json(placeDoc)
  })


  router.get('/places', auth(), async (_, res) => {
    const places = await Place.find()
    res.json(places)
  })

  router.get('/user-places', auth(), async (req, res) => {
    const places = await Place.find({ owner: req.user._id })
    res.json(places)
  })

  router.get('/places/:id', auth(), async (req, res) => {
    const place = await Place.findById(req.params.id)
    res.json(place)
  })

  router.put('/places/:id', auth(), async (req, res) => {

    const placeDoc = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json(placeDoc)
  }
  )

}

module.exports = place
