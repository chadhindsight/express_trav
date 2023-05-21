const express = require('express');
const path = require('path');

const app = express();
const members = require('./Members');

// Sets static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/members', (req, res) => {
    res.json(members)
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Connection established on ${PORT}`));