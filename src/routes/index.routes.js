const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  res.send('HOME PAGE')
})

router.get('/upload', (req, res, next) => {
  res.send('UPLOAD FORM')
})

router.post('/upload', (req, res, next) => {
  res.send('UPLOADED')
})

router.get('/image/:id', (req, res, next) => {
  res.send(`IMAGE ${req.params.id} deleted`)
})

module.exports = router