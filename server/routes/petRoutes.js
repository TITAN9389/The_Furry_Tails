const mongoose = require('mongoose');

const Pet = mongoose.model('Pet');

module.exports = app => {
	app.get('/api/pets', async (req, res) => {
		const pets = await Pet.find({});
		res.send(pets);
	});

	app.post('/api/pets', async (req, res) => {
		const { name, type, age, sex, breed, size, location, team } = req.body;

		const pet = new Pet({
			name,
			type,
			age,
			sex,
			breed,
			size,
			location,
			team
		});

		try {
			await pet.save();
			res.send(pet);
		} catch (err) {
			res.send(400, err);
		}
	});
};
