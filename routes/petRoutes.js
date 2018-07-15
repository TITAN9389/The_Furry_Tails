const mongoose = require('mongoose');
const _ = require('lodash');

const Pet = mongoose.model('Pet');

module.exports = app => {
	app.get('/api/pets', async (req, res) => {
		const pets = await Pet.find({});
		res.send(pets);
	});

	app.post('/api/pets', async (req, res) => {
		const body = _.pick(req.body, [
			'name',
			'type',
			'age',
			'sex',
			'breed',
			'size',
			'location',
			'team',
			'tell',
			'image'
		]);

		const pet = new Pet(body);

		try {
			await pet.save();
			res.send(pet);
		} catch (err) {
			res.send(400, err);
		}
	});
};
