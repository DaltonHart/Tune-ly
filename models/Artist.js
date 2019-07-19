const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
	name: { type: String },
	genre: { type: String },
	origin: { type: String },
	members: [{ type: String }],
	age: { type: Number },
	img: { type: String }
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
