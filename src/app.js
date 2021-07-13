const express = require('express')

const app = express()

const indexRoutes = require('./index-routes')
app.use('/', indexRoutes)

module.exports = app