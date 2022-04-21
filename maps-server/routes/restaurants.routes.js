const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant')


// Listado restaurantes
router.get('/', (req, res, next) => {

	Restaurant.find({}, (error, restaurantsFromDB) => {
		if (error) {
			next(error);
		} else {
			res.render('restaurants/index', { restaurants: restaurantsFromDB });
		}
	})
})




// Formulario nuevo restaurante (render)
router.get('/new', (req, res, next) => {
	res.render('restaurants/new');
})


// Formulario nuevo restaurante (handle)
router.post('/', (req, res, next) => {

	const { longitude, latitude } = req.body

	const newRestaurant = new Restaurant({
		name: req.body.name,
		description: req.body.description,
		location: {
			type: 'Point',
			coordinates: [longitude, latitude]
		}
	});

	newRestaurant.save((error) => {
		if (error) {
			next(error);
		} else {
			res.redirect('/restaurants')
		}
	})
})




// Detalles de restaurante
router.get('/:restaurant_id', (req, res, next) => {
	Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
		if (error) {
			next(error);
		} else {
			res.render('restaurants/show', { restaurant: restaurant });
		}
	});
});







// router.post('/:restaurant_id', (req, res, next) => {
// 	Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
// 		if (error) {
// 			next(error);
// 		} else {
// 			restaurant.name = req.body.name;
// 			restaurant.description = req.body.description;
// 			restaurant.save(error => {
// 				if (error) {
// 					next(error);
// 				} else {
// 					res.redirect(`/restaurants/${req.params.restaurant_id}`);
// 				}
// 			});
// 		}
// 	});
// });




module.exports = router;
