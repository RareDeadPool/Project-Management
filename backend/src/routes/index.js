const express = require('express')
const Router = express.Router()
const v1Routes = require('./v1')
Router.use('/v1', v1Routes)
module.exports = Router
