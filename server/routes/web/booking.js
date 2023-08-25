import Booking from '../../models/booking'
import auth from '../../middleware/auth'

const booking = (router) => {
  router.post('/booking', auth(), async (req, res) => {
    const res = await Booking.create({
      owner: req.user._id,
      ...req.body
    })
    res.json(res)
  })

}

module.exports = booking
