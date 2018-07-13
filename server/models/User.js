const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	role: String,
	team: {
		type: String,
		required: true
	},
	tell: Number
});

mongoose.model('User', userSchema);
