const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/Pet');
require('./models/User');

mongoose.Promise = global.Promise;
mongoose.connect(
	keys.mongoURI,
	{ useMongoClient: true }
);

const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

require('./routes/petRoutes')(app);

if (['production'].includes(process.env.NODE_ENV)) {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve('client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
	console.log(`Listening on port`, PORT);
});
