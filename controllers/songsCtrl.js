const express = require('express');
const router = express.Router();

// Database
const db = require('../models');

// GET Songs Index
router.get('/', (req, res) => {
	db.Song.find({}, (err, allSongs) => {
		if (err)
			return res.status(400).json({
				status: 400,
				message: 'Something went wrong, please try again'
			});

		res.json({ status: 200, data: allSongs });
	});
});

// GET Songs Show
router.get('/:cityId', (req, res) => {
	db.Song.findById(req.params.cityId, (err, foundSong) => {
		if (err)
			return res.status(400).json({
				status: 400,
				message: 'Something went wrong, please try again'
			});

		res.json({ status: 200, data: foundSong });
	});
});

// PUT Songs Update
router.put('/:cityId', (req, res) => {
	db.Song.findByIdAndUpdate(
		req.params.cityId,
		req.body,
		{ new: true },
		(err, newSong) => {
			if (err)
				return res.status(400).json({
					status: 400,
					message: 'Something went wrong, please try again'
				});

			res.json({ status: 200, data: newSong });
		}
	);
});

// Delete Songs Destroy
router.post('/:cityId', (req, res) => {
	db.Song.findByIdAndDelete(req.params.cityId, (err, deletedSong) => {
		if (err)
			return res.status(400).json({
				status: 400,
				message: 'Something went wrong, please try again'
			});

		res.json({ status: 200, message: 'success' });
	});
});

module.exports = router;
