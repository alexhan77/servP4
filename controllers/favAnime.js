let db = require('../models')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.favAnime.findAll()
    .then((favorite) => {
        res.render('/favorites')
        console.log('Found all of your favorites babe😘', favorite)
    })
    .catch(err => {
        console.log('There was an error with getting your favorites', err)
    })
})

router.post('/', (req, res) => {
    db.favAnime.create({
        user: req.user
    })
    .then(() => {
        res.send({message: 'favAnime list is created, add some!', status: '200'})
    })
    .catch(() => {
        console.log('Error creating a faves list', err)
    })
})

router.post('/', (req, res) => {
    db.favAnime.findOneAndUpdate({
        user: req.user._id,
        _id: req.body._id
    },
        { $push: {item: {
            title: req.body.title,
            rating: req.body.rating,
            genre: req.body.genre,
            animeId: req.body.animeId  
        }
    },
        new: true
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
    db.favAnime.findOne({_id: req.body.favAnimeId })
    .then((favAnime) => {
        let fav = favAnime.faves.id(req.params.id)
        fav.title = req.body.title,
        fav.rating = req.body.rating,
        fav.genre = req.body.genre,
        fav.animeId = req.body.animeId
        fav.save()
    })
    .then(() => {
        res.redirect('/favorites')
        console.log('Edit for your top faves successful', favorites)
    })
})

router.delete('/:id', (req, res) => {
    db.favAnime.findByIdAndDelete(req.params.id)
    .then(() => {
        res.send({ message: 'Successfully deleted a Faves', status: '200' })
    })
    .catch(err => {
        console.log('Error deleting a faves', err)
    })
})

module.exports = router