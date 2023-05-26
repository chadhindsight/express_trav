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
        return res.status(400).json({ msg: 'Please include a name and an email' });
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
            let { name, email, id } = member

            if (id === Number(req.params.id)) {
                member.name = updateMember.name ? updateMember.name : name;
                member.email = updateMember.email ? updateMember.email : email;

                res.json({ msg: "Member has been updated", member })
            }
        })
    } else {
        res.status(400).json({ msg: `Member with id of ${userID} cannot be found` });
    }
})

// Delete member
router.delete('/:id', (req, res) => {
    const userID = req.params.id;

    const found = members.some(member => member.id === Number(userID))

    if (found) {
        res.json({
            msg: 'Member successfully deleted!',
            members: members.filter(member => member.id !== Number(userID))
        })
    } else {
        res.status(400).json({ msg: `Member with id of ${userID} cannot be found` });
    }
})
module.exports = router;