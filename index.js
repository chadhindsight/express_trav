const express = require('express');
const path = require('path');
const { logger } = require('./middleware/logger');

const app = express();

// Init the logger middleware 
// app.use(logger);

// This set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/member'));


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Connection established on ${PORT}`));