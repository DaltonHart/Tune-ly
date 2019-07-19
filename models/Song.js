const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
	title: { type: String },
	year: { type: Number },
	Artist: {
		type: Schema.Types.ObjectId,
		ref: 'Artist'
	},
	length: { type: String },
	lyrics: { type: String }
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
