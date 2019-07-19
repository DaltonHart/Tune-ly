// SECTION  Modules
const express = require('express');

// SECTION Instanced Modules
const app = express();

// SECTION System Configuration Variables
const PORT = process.env.PORT || 4000;

// SECTION Middleware
app.use(express.json());

// SECTION Routes
app.get('/status', (req, res) => {
	res.json({ status: 200, message: 'OK' });
});

// SECTION Server Listener
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
