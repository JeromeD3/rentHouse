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

  router.get('/bookings', auth(), async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
    
    res.json(bookings)
  })

}

module.exports = booking
