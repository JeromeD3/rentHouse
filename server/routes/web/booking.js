const Booking = require('../../models/Booking')
const auth = require('../../middleware/auth')

const booking = (router) => {
  router.post('/bookings', auth(), async (req, res) => {
    const bookingDoc = await Booking.create({
      owner: req.user._id,
      ...req.body
    })
    res.json(bookingDoc)
  })

}

module.exports = booking
