let router = require('express').Router()
let db = require('../models')

//get all posts and send em home
router.get('/', (req, res) => {
  
})

//Post route for the form
router.post('/new', (req, res) => {
  
})



//TODO Still needs a button make whole div a clickable link imo //// get route for single post view when clicked on use single postID findOne
// router.get('/more/:id', (req, res) => {
    
// })


// //TODO Put button on the inside of single post view page only for proper user or admins /////// create put route for edditing single posts on profile page
// router.post ('/more/:id', (req, res) => {
    
// })


router.get('/edit', (req, res) => {
  
})


router.put('/edit/:id', (req, res) => {
  console.log("hitting the update route lets get it you are a king/queen you champion code star");
    
})


//TODO still needs a button on inside or next to edit post button ///// DELETE route for single post
router.delete('/:id', (req, res) => {
  console.log("hitting the delete route")
    
})


module.exports = router
