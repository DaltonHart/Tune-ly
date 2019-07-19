const mongoose = require('mongoose');
mongoose.connect(
	'mongodb://localhost:27017/tunely',
	{
		useNewUrlParser: true
	},
	() => {
		console.log('Mongodb Connected');
	}
);

module.exports = {
	Song: require('./Song'),
	Artist: require('./Artist')
};
