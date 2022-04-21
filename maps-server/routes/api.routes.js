const router = require('express').Router()
const Restaurant = require('../models/restaurant')


router.get('/restaurants', (req, res) => {

	Restaurant
		.find()
		.then(restaurants => res.json(restaurants))
		.catch(err => console.log(err))
})


module.exports = router