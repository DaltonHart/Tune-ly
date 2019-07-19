const express = require('express');
const router = express.Router();

// Database
const db = require('../models');

// GET Artists Index
router.get('/', (req, res) => {
	db.Artist.find({}, (err, allArtists) => {
		if (err)
			return res.status(400).json({
				status: 400,
				message: 'Something went wrong, please try again'
			});

		res.json({ status: 200, data: allArtists });
	});
});

// GET Artists Show
router.get('/:artistId', (req, res) => {
	db.Artist.findById(req.params.artistId, (err, foundArtist) => {
		if (err)
			return res.status(400).json({
				status: 400,
				message: 'Something went wrong, please try again'
			});

		res.json({ status: 200, data: foundArtist });
	});
});

// POST Artists Create
router.post('/', (req, res) => {
	db.Artist.create(req.body, (err, newArtist) => {
		if (err)
			return res.status(400).json({
				status: 400,
				message: 'Something went wrong, please try again'
			});

		res.json({ status: 200, data: newArtist });
	});
});

// PUT Artists Update
router.put('/:artistId', (req, res) => {
	db.Artist.findByIdAndUpdate(
		req.params.artistId,
		req.body,
		{ new: true },
		(err, newArtist) => {
			if (err)
				return res.status(400).json({
					status: 400,
					message: 'Something went wrong, please try again'
				});

			res.json({ status: 200, data: newArtist });
		}
	);
});

// Delete Artists Destroy
router.post('/:artistId', (req, res) => {
	db.Artist.findByIdAndDelete(req.params.artistId, (err, deletedArtist) => {
		if (err)
			return res.status(400).json({
				status: 400,
				message: 'Something went wrong, please try again'
			});

		res.json({ status: 200, message: 'success' });
	});
});

// ---------------------- ARTIST SONGS

// GET Artist Songs Index
router.get('/:artistId/songs', (req, res) => {
	db.Song.find({ artist: req.params.artistId }, (err, artistSongs) => {
		if (err)
			return res.status(400).json({
				status: 400,
				message: 'Something went wrong, please try again'
			});

		res.json({ status: 200, data: artistSongs });
	});
});

// POST Artist Song Create
router.post('/:artistId/songs', (req, res) => {
	const newSong = new db.Song(req.body);
	newSong.artist = req.params.artistId;
	newSong.save((err, savedSong) => {
		if (err)
			return res.status(400).json({
				status: 400,
				message: 'Something went wrong, please try again'
			});

		res.json({ status: 200, data: artistSongs });
	});
});

module.exports = router;
