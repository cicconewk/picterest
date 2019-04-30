const mongoose = require('mongoose')
const environment = process.env.NODE_ENV || 'development'
const {user, password, host, port, dialect, database} = require('./config/dbconfig.json')[environment]

mongoose.connect(`${dialect}://${user}:${password}@${host}:${port}/${database}`, 
  {useNewUrlParser: true, useCreateIndex: true}, (err) => {
    if (err) throw new Error(err)

    console.log(`Database ${database} connected successfully.`)
  })