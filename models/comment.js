let mongoose = require ('mongoose')

// create comment schema
let commentSchema = new mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    body: {
        type: String 
    },
    animeId: {
        type: String 
    }
})


module.exports = mongoose.model('Comment', commentSchema)