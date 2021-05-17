const {Router} = require('express')
const Link = require('../models/Link')
const router = Router()

router.post('/generate', async (req, res) => {
  try {

  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again' })
  }
})

router.get('/', async (req, res) => {
  try {

  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again' })
  }
})

router.get('/generate', async (req, res) => {
  try {

  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again' })
  }
})


module.exports = router