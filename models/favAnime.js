let mongoose = require ('mongoose')


let favAnimeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    faves: [{
            title: {
                type: String,
            },
            rating: {
                type: Number,
            },
            genre: {
                type: Array,
            },
            animeId: {
                type: String 
            }
        }]
})

module.exports = mongoose.model('favAnime', favAnimeSchema)