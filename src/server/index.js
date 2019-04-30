const express = require('express')
const app = express()
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')

app.set('PORT', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('api/users', require(path.join(__dirname,'routes','users.routes')))
app.use('api/pictures', require(path.join(__dirname,'routes','pictures.routes')))
app.use((req, res, next) => {
  return res.status(404).json({"message": "Resource not found."})
})

app.listen(3000, () => {
  console.log('Express server running on PORT 3000')
})