const express = require('express');
const router = express.Router();
//const Film = require('../models/Film.model');
const { isAuthenticated } = require('../middleware/jwt.middleware');

//create a film
// router.put('/film/', isAuthenticated, (req, res, next) => {
//     const { title, description, videoLink } = req.body;
//     const titleId = req.payload._id;

//     User.findByIdAndUpdate(userId, { name, email }, { new: true })
//         .then(updatedUser => {
//             const { email, name } = updatedUser;
//             res.status(200).json({ email, name });
//         })
//         .catch(err => res.status(500).json({ message: "Internal Server Error" }));
// });

//read a film details

//update a film

//delete a film
/*
router.delete("/film/:filmId", (req, res, next) => { 
    const {filmId} = req.params;
     if (!mongoose.Types.ObjectId.isValid(filmId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
Film.findByIdAndDelete(filmId)
        .then( () => {
            res.json({ message: `Film with ${filmId} is removed successfully.` })
        })
        .catch( (e) => {
            console.log("Error deleting film");
            console.log(e)
            res.status(500).json({message: "Error deleting project"})
        });
});


*/
// module.exports = router;