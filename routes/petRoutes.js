const mongoose = require('mongoose');
const _ = require('lodash');

const Pet = mongoose.model('Pet');

module.exports = app => {
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

	// app.put('/api/pets/:id', async (req, res) => {
	// 	const body = _.pick(req.body, ['adopted', 'sponsored']);
	// 	const updated = Pet.updateById(id);
	// 	try {
	// 		await updated.save();
	// 		res.send(updated);
	// 	} catch (err) {
	// 		res.send(400, err);
	// 	}
	// });
};
