const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    // get all jokes
    app.get("/api/jokes", JokeController.findAllJokes);
    // create a new joke
    app.post("/api/jokes", JokeController.createNewJoke);
    // return a single joke matching this _id
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    // update a single joke matching this _id
    app.put("/api/jokes/:id", JokeController.updateOneJoke);
    // delete a single joke matching this _id
    app.delete("/api/jokes/:id", JokeController.deleteOneJoke);
}