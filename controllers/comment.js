let db = require('../models')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.Comment.findAll()
    .then((commentData) => {
        res.send(commentData)
    })
    .catch(err => {
        console.log('Error', err)
    })
})

router.post('/', (req, res) => {
    db.Comment.create({
       user: req.body.user,
       body: req.body.body,
       animeId: req.body.animeId 
    })
    .then((commentData) => {
        res.send(commentData)
    })
    .catch(err => {
        console.log('Error', err)
    })
})

router.put('/:id', (req, res) => {
    db.Comment.findByIdAndUpdate({_id: req.params.id}, {
        body: req.body.body
    })
    .then(() => {
        res.redirect('/:id')
        console.log('Anedit was made to a Comment', _id)
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