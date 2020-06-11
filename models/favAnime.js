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
        type: Array,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    animeId: {
        type: String 
    }
})

module.exports = mongoose.model('favAnime', favAnimeSchema)