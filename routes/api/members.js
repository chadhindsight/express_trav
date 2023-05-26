const express = require('express');
const uuid = require('uuid')
const router = express.Router();
const members = require('../../Members');

// Get all members
router.get('/', (req, res) => {
    res.json(members);
})

// Get specific member
router.get('/:id', (req, res) => {
    const userID = req.params.id;

    const found = members.some(member => member.id === Number(userID))

    if (found) {
        res.json(members.filter(member => member.id === Number(userID)))
    } else {
        res.status(400).json({ msg: `Member with id of ${userID} cannot be found` });
    }
})

// Create new Member
router.post('/', (req, res) => {
    const newMember = {
        ...req.body,
        id: uuid.v4(),
        status: 'active'
    };
    if (!newMember.name || !newMember.email) {
        console.log(req.body)
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    members.push(newMember);
    res.json(members);
})

// Update Member
router.put('/:id', (req, res) => {
    const userID = req.params.id;

    const found = members.some(member => member.id === Number(userID))

    if (found) {
        let updateMember = req.body;

        members.forEach(member => {
            let { name, email } = member

            if (member.id === Number(req.params.id)) {
                name = updateMember.name ? updateMember.name : name;
                email = updateMember.email ? updateMember.email : email;

                res.json({ msg: `Member ${name} has been updated`, member })
            }
        })
    } else {
        res.status(400).json({ msg: `Member with id of ${userID} cannot be found` });
    }
})

module.exports = router;