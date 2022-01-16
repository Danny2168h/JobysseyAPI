const express = require('express');
const router = express.Router();
const UserData = require('../models/UserData')

router.post('/', async (req, res) => {
    const post =  new UserData({
        name: req.body.name,
        email: req.body.email
        });

    try {
        const saveData = await post.save();
        res.json(saveData);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:userId', async (req, res) => {
    try{
    const post = await UserData.findById(req.params.userId);
    res.json(post);
    } catch (err) {
        res.json({message: err});
    }
})

module.exports = router;