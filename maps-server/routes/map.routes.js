const router = require('express').Router()

router.get('/basico', (req, res) => {
	res.render('maps/basic-map')
})

router.get('/restaurantes', (req, res) => {
	res.render('maps/restaurants-map')
})

module.exports = router