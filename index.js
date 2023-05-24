const express = require('express');
const path = require('path');
const { logger } = require('./middleware/logger');

const app = express();

// Init the logger middleware 
// app.use(logger)

// Body Parser stuff
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// This set static folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes for members
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Connection established on ${PORT}`));