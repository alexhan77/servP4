let db = require('../models')
const express = require('express');
const { populate } = require('../models/user');
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

//Creates the instance(list) for the fav anime(objects) to be hoisted onto
router.post('/', (req, res) => {
    db.favAnime.create({
        user: req.body.user
    })
    .then(() => {
        res.send({message: 'favAnime list is created, add some!', status: '200'})
    })
    .catch(() => {
        console.log('Error creating a faves list', err)
    })
})

//creates the anime 
router.put('/', (req, res) => {
    db.favAnime.findOne({
        //user: req.user._id
        user: req.body.user
    })
        // _id: req.body._id
    .then((favAnime) => {
        favAnime.faves.push({
            title: req.body.title,
            rating: req.body.rating,
            genre: req.body.genre,
            animeId: req.body.animeId  
        })
        favAnime.save()
        res.send(favAnime)
        console.log('Your Faves were created successfully')
    })
    .catch(err => {
        console.log('There was an error creating your faves', err)
    })
})


router.put('/:id', (req, res) => {
    db.favAnime.findOne({
        user: req.body.user,
        //animeId: req.body.animeId
    })
    .then((favAnime) => {
        console.log('fave Data', favAnime.faves)
        db.favAnime.updateOne({
            user: req.body.user
        })
        for (let i = 0; i < favAnime.faves.length; i++) {
            if (favAnime.faves[i].animeId === req.params.id) {
                let fav = favAnime.faves[i]
                fav.title = req.body.title,
                fav.rating = req.body.rating,
                fav.genre = req.body.genre,
                fav.animeId = req.body.animeId
            }
        }
        favAnime.save()
    })
    .then((anime) => {
        res.send(anime)
        res.redirect('/favorites')
        console.log('Edit for your top faves successful', favAnime)
    })
})

// router.put('/:id', (req, res) => {
//     db.favAnime.updateOne({
//         user: req.body.user
//     },{
//         user.faves[req.params.id].animeId: 
//     })
//     .then((anime) => {
//         res.send(anime)
//         //res.redirect('/favorites')
//         //console.log('Edit for your top faves successful', favAnime)
//     })
// })

router.put('/delete/:id', (req, res) => {
    db.favAnime.findOne({
        user: req.body.user
    })
    .then((favAnime) => {
        console.log('fave Data', favAnime.fave)
        for (let i = 0; i < favAnime.faves.length; i++) {
            if (favAnime.faves[i].animeId === req.params.id) {
                favAnime.faves.pop(i)
            }
        }
        favAnime.save()
    })
    .then(() => {
        res.send({ message: 'Successfully deleted a Faves', status: '200' })
    })
    .catch(err => {
        console.log('Error deleting a faves', err)
    })
})

module.exports = router