const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { logger } = require('./middleware/logger');
const members = require('./Members');

const app = express();

// Inits the logger middleware 
// app.use(logger)

// Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser that allows you to get stuff from req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) =>
    // Instead of this, you would do something like res.redirect in the real world
    res.render('index', {
        title: 'Member App',
        members
    })
);

// This set static folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes for members
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Connection established on ${PORT}`));