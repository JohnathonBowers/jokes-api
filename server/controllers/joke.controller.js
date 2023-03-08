const Joke = require("../models/joke.model");

// get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
}


// create a new joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
}

// return a single joke matching this _id
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
}


// update a single joke matching this _id
module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
}


// delete a single joke matching this _id
module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
}