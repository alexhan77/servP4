let mongoose = require('mongoose')

let queueSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    queue: [{
        watched: Array,
        watching: Array,
        next: Array
    }]
})