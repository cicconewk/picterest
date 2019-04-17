const express = require('express')
const app = express()
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')

app.set('PORT', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(multer({dest: path.join(__dirname,'public','img','uploads')}).single('image'))

app.use(express.static(path.join(__dirname,'public')))
app.use(require(path.join(__dirname,'routes','index.routes.js')))

app.listen(3000, () => {
  console.log('Express server running on PORT 3000')
})