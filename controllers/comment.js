let db = require('../models')
const express = require('express');
const router = express.Router();

router.get('/:animeId', (req, res) => {
    db.Comment.findOne({animeId: req.params.animeId
    })
    .then((commentData) => {
        res.send(commentData)
    })
    .catch(err => {
        console.log('Error', err)
    })
})

//This route is to create the instance for the comments to be added to pertaining to the anime
router.post('/', (req, res) => {
    db.Comment.create({
        animeId: req.body.animeId
    })
    .then(() => {
        res.send({message: "Comment was made on an Anime", status: '200'})
    })
    .catch(err => {
        console.log('POST route error for comments', err)
    })
})

//This route is to add a comment to an anime ( even tho its a PUT route)
router.put('/', (req, res) => {
    db.Comment.findOne({
        animeId: req.body.animeId
    })
    .then((comment) => {
        comment.userComment.push({
            user: req.body.user,
            body: req.body.body
        })
        comment.save()
        res.send(comment)
    })
    .catch(err => {
        console.log('Error', err)
    })
})


//this route is to edit the comment of an Anime 
router.put('/:id', (req, res) => {
    db.Comment.findByIdAndUpdate({_id: req.params.id}, {
        body: req.body.body
    })
    .then(() => {
        res.redirect('/:id')
        console.log('An edit was made to a Comment', _id)
    })
    .catch(() => {
        console.log('Error', err)
    })
})

router.delete('/:id', (req, res) => {
    db.Comment.findByIdAndDelete({_id: req.params.id}, {
        user: req.body.user,
        body: req.body.body,
        animeId: req.body.animeId
    })
    .then(() => {
        res.redirect('/:id')
        console.log('Comment was deleted')
    })
    .catch(err => {
        console.log('Error', err )
    })
})
module.exports = router 