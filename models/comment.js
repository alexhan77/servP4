let mongoose = require ('mongoose')

// create comment schema
let commentSchema = new mongoose.Schema ({
    animeId: {
        type: String 
    },
    userComment: [{    
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true 
        },
        body: {
            type: String 
        }
    }]
})


module.exports = mongoose.model('Comment', commentSchema)