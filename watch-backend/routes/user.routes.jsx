const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const { isAuthenticated } = require('../middleware/jwt.middleware');

router.put('/edit-profile/', isAuthenticated, (req, res, next) => {
    const { name, email } = req.body;
    const userId = req.payload._id;

    User.findByIdAndUpdate(userId, { name, email }, { new: true })
        .then(updatedUser => {
            const { email, name } = updatedUser;
            res.status(200).json({ email, name });
        })
        .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});

module.exports = router;