let router = require('express').Router()
let db = require('../models')

// NOTE: User should be logged in to access this route
router.get('/', (req, res) => {
    // The user is logged in, so req.user should have data!
    // TODO:Add posts and user info
    // NOTE: This is the user data from the time the token was issued
    // WARNING: If you update the user info those changes will not be reflected here
    // To avoid this, reissue a token when you update user data

})

//TODO Still needs a button //////// create put route for edditing profile
router.put('/:id', (req, res) => {
   db.User.findByIdAndUpdate({_id: req.params.id}, {
       pic: req.body.pic,
       bio: req.body.bio
   })
   .then(() => {
        res.send({message: 'Successfully updated user data', status: '200'})
   })
   .catch(err => {
       console.log('There is an error editing user data', err)
   })
})

//TODO Still needs a button /////// delete route for profile
router.delete('/:id', (req, res) => {
    
})

// make a faves model and refrence user and post
// attatch different user id and make sure people are logged in and query for favorites with where conditon


module.exports = router
