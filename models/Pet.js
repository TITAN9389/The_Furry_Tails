const mongoose = require('mongoose');
const { Schema } = mongoose;
const shortid = require('shortid');

const petSchema = new Schema({
	_id: {
		type: String,
		default: shortid.generate
	},
	name: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	age: {
		type: String,
		required: true
	},
	sex: {
		type: String,
		required: true
	},
	breed: {
		type: String,
		required: true
	},
	size: {
		type: String,
		required: true
	},
	location: String,
	team: {
		type: String,
		required: true
	},
	adopted: Boolean,
	sponsored: Boolean,
	tell: {
		type: Number,
		required: true
	},
	image: String,
	createdAt: { type: Date, default: Date.now }
});

mongoose.model('Pet', petSchema);
