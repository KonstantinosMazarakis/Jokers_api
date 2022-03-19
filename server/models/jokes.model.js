const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Setup cannot be empty"],
            minlength: [10, "Setup has to be at least 10 characters long"]
        },
        punchline: {
            type: String,
            required: [true, "Punchline cannot be empty"],
            minlength: [3, "Punchline has to be at least 3 characters long"]
        },
    },
    { timestamps: true }
);



const Jokes = mongoose.model("Jokes", JokeSchema)

module.exports = Jokes


