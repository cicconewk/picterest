const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  res.send('GET ALL PICTURES')
})

router.get('/:id', (req, res, next) => {
  res.send('GET A PICTURE PROFILE')
})

router.post('/', (req, res, next) => {
  res.send('CREATE NEW PICTURE')
})

router.put('/:id', (req, res, next) => {
  res.send(`EDIT PICTURE`)
})

router.delete('/:id', (req, res, next) => {
  res.send('DELETE PICTURE')
})

module.exports = router