let mongoose = require('mongoose')

let queueSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    queue: [{
        watching: Array,
        watched: Array,
        willWatch: Array
    }]
})

module.exports = mongoose.model('Queue', queueSchema)