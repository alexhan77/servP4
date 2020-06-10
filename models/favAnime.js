let mongoose = require ('mongoose')


let favAnimeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('favAnime', favAnimeSchema)