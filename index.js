const express = require('express');
const app = express();

// Sets static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Connection established on ${PORT}`));