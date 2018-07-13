const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cors = require('cors');

require('./models/Pet');
require('./models/User');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

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
	app.use(express.static('../dist'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve('..', 'dist', 'index.html'));
	});
}

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
	console.log(`Listening on port`, PORT);
});
