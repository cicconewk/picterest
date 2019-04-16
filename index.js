const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',require(path.join(__dirname,'server','routes','principal.routes.js')))

app.listen(3000, () => {
  console.log('Express server running on PORT 3000')
})