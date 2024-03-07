const router = require("express").Router();
const mongoose = require("mongoose");
const Collection = require("../models/Collection.model");

//User Auth
const { isAuthenticated } = require("../middleware/jwt.middleware");

//Post /collection
router.post("/collection", (req, res, next) => {
  const { title, description } = req.body;
  Collection.create({ title, description })
    .then((collectionFromDb) => {
      res.status(201).json(collectionFromDb);
    })
    .catch((err) => {
      console.log("Error in creating a new collection: ");
      console.error(err);
      res.status(500).json({ message: "Error creating a new collection" });
    });
});

// GET /colection
router.get("/collection", (req, res, next) => {
  Collection.find()
    .populate("movies")
    .then((collectionFromDb) => {
      res.json(collectionFromDb);
    })
    .catch((err) => {
      console.log("Error getting list of collection");
      console.error(err);
      res.status(500).json({ message: "Error getting list of collection" });
    });
});

// DELETE /collection/:collectionId
router.delete("/collection/:collectionId", (req, res, next) => {
  const { collectionId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(collectionId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Collection.findByIdAndDelete(collectionId)
    .then(() => {
      res.json({
        message: `collection with ID ${collectionId} is removed successfully.`,
      });
    })
    .catch((e) => {
      console.log("Error deleting collection");
      console.error(e);
      res.status(500).json({ message: "Error deleting collection" });
    });
});

module.exports = router;
