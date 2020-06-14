let mongoose = require('mongoose')

let playlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    animePlaylist: [{
        animeId: String,
        title: String,
        queue: String
    }]
})

module.exports = mongoose.model('playlist', playlistSchema)