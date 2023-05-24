const express = require('express');
const path = require('path');
const members = require('./Members');
const { logger } = require('./middleware/logger');

const app = express();

// Init the logger middleware 
// app.use(logger);

// Sets static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/members', (req, res) => {
    res.json(members)
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Connection established on ${PORT}`));