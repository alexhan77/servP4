let db = require('../models')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.favAnime.findAll()
    .then((favorite) => {
        res.redirect('/favorites')
        console.log('Found all of your favorites babe😘', favorite)
    })
    .catch(err => {
        console.log('There was an error with getting your favorites', err)
    })
})

router.post('/', (req, res) => {
    db.favAnime.create({
        title: req.body.title,
        rating: req.body.rating,
        genre: req.body.genre,
        user: req.body.user,
        animeId: req.body.animeId
    })
    .then(() => {
        res.redirect('/favorites')
        console.log('Your Faves were created successfully')
    })
    .catch(err => {
        console.log('There was an error creating your faves', err)
    })
})

router.put('/:id', (req, res) => {
    db.favAnime.findByIdAndUpdate(), ({
        title: req.body.title,
        rating: req.body.rating,
        genre: req.body.genre,
        animeId: req.body.animeId
        //I didnt add the user ID because this faves list will remain with the same user
    })
    .then((favorite) => {
        res.redirect('/favorites')
        console.log('Edit for your top faves successful', favorites)
    })
})

router.delete('/:id', (req, res) => {
    db.favAnime.findByIdAndDelete(), ({
        title: req.body.title,
        rating: req.body.rating,
        genre: req.body.genre,
        user: req.body.user,
        animeId: req.body.animeId
    })
})

module.exports = router