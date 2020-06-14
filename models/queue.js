let mongoose = require('mongoose')

let queueSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // queue: [{
    //     watching: [{
    //         animeId: String,
    //         title: String 
    //     }],
    //     watched: [{
    //         animeId: String,
    //         title: String
    //     }],
    //     willWatch: [{
    //         animeId: String,
    //         title: String 
    //     }]
    // }],
    animeQ: [{
        animeId: String,
        title: String,
        status: String
    }]
})

module.exports = mongoose.model('Queue', queueSchema)