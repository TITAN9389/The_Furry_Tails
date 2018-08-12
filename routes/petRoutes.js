const mongoose = require('mongoose');
const _ = require('lodash');

const Pet = mongoose.model('Pet');

module.exports = app => {
	// Adding New Pet with Required Fields
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
			'sponsored',
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

	// Getting pets based on Query parameters
	app.get('/api/pets', async (req, res) => {
		const { skipCount, takeCount, sortBy, orderBy } = req.query;
		try {
			const pets = await Pet.find({})
				.skip(skipCount > 0 ? (skipCount - 1) * takeCount : 0)
				.limit(!takeCount ? 4 : Number(takeCount))
				.sort(
					!sortBy ? { createdAt: -1 } : { [sortBy]: Number(orderBy) }
				);

			res.send(pets);
		} catch (err) {
			res.send(400, err);
		}
	});

	// Updating Pet Data Only "Adopted , Sponsored" True : False
	app.patch('/api/pets/:id', async (req, res) => {
		const id = req.params.id;
		const body = _.pick(req.body, ['adopted', 'sponsored']);
		try {
			const pet = await Pet.findByIdAndUpdate(
				id,
				{ $set: body },
				{ new: true }
			);
			res.send({ pet });
		} catch (err) {
			res.send(404, err);
		}
	});

	// Deleting Adopted Pets from DB or View
	app.delete('/api/pets/:id', async (req, res) => {
		const id = req.params.id;
		try {
			const pet = await Pet.findByIdAndRemove(id);
			res.send(pet);
		} catch (err) {
			res.send(400, err);
		}
	});
};
