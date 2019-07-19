// SECTION  Modules
const express = require('express');

// SECTION Instanced Modules
const app = express();

// SECTION System Configuration Variables
const PORT = process.env.PORT || 4000;

// SECTION Middleware
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// SECTION Routes
app.get('/status', (req, res) => {
	res.json({ status: 200, message: 'OK' });
});

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

// SECTION Server Listener
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
