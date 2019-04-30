const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  res.send('GET ALL USERS')
})

router.get('/:id', (req, res, next) => {
  res.send('GET A USER PROFILE')
})

router.post('/', (req, res, next) => {
  res.send('CREATE NEW USER')
})

router.put('/:id', (req, res, next) => {
  res.send(`EDIT USER`)
})

router.delete('/:id', (req, res, next) => {
  res.send('DELETE USER')
})

module.exports = router