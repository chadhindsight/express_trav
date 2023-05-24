const express = require('express');
const router = express.Router();

// Get all members
router.get('/api/members', (req, res) => {
    res.json(members)
})

// Get specific member
router.get('/api/members/:id', (req, res) => {
    const userID = req.params.id

    const found = members.some(member => member.id === Number(userID))

    if (found) {
        res.json(members.filter(member => member.id === Number(userID)))
    } else {
        res.status(400).json({ msg: `Member with id of ${userID} cannot be found` });
    }
})