const router = require('express').Router()
const controller_ra = require('../controller/controller_ra')

router.post('/save', controller_ra.save);


module.exports = app => app.use(router)