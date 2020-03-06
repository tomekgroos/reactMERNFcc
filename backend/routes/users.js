const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()                     // mongoose method to get a list from MongoDB Atlas
    .then(users => res.json(users)) // return in json format users from database
    .catch(err => res.status(400).json('Error ' + err)); // if error
});

router.route('/add').post((req, res) => { 
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()  // method to save in database
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;