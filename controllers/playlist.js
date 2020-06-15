//let db = require('../models')
let db = require('../models/playlist')
const express = require('express');
const user = require('../models/user');
const playlist = require('../models/playlist');
const router = express.Router();

router.get('/:user', (req, res) => {
    db.findOne({
        user: req.params.user
    })
    .then((queues) => {
        res.send(queues)
    })
    .catch(err => {
        console.log('Error in the GET route', err)
    })
})

router.post('/', (req, res) => {
    db.create({
        user: req.body.user,
        animeId: req.body.animeId,
        title: req.body.title,
        status: req.body.status
    })
    .then(() => {
        res.send({message: 'Instance is created', status: '200'})
    })
    .catch(err => {
        console.log('Error in the post playlist route', err)
    })
    
})
router.put('/', (req, res) => {
    db.findOne({
        user: req.body.user
    })
    .then((status) => {
        status.animePlaylist.push({
            title: req.body.title,
            animeId: req.body.animeId,
            queue: req.body.queue
        })
        status.save()
        res.send(status)
        console.log('Queue Status for an Anime was created')
    })
    .catch(err => {
        console.log('Error in creating a queue', err)
    })
})

router.put('/:id', (req, res) => {
    db.findOne({
        user: req.body.user
    })
    .then((playlist) => {
        db.updateOne({
            user: req.body.user
        })
        for (let i = 0; i < playlist.animePlaylist.length; i++) {
            if (playlist.animePlaylist[i].animeId === req.params.id) {
                let que = playlist.animePlaylist[i]
                que.animeId = req.body.animeId,
                que.title = req.body.title,
                que.queue = req.body.queue
            }
        }
        playlist.save()
    })
    .then(() => {
        res.send({message: 'Successfully edited a queued anime', status: '200'})
    })
    .catch(err => {
        console.log('Error editing the queued anime', err)
    })
})

router.put('/delete/:id', (req, res) => {
    db.findOne({
        user: req.body.user
    })
    .then((playlist) => {
        console.log('queue data', playlist.animePlaylist)
        for (let i = 0; i < playlist.animePlaylist.length; i++) {
            if (playlist.animePlaylist[i].animeId === req.params.id) {
                playlist.animePlaylist.pop(i)
            }
        }
        playlist.save()
    })
    .then(() => {
        res.send({message: 'Successfully deleted a queued anime', status: '200'})
    })
    .catch(err => {
        console.log('Error in deleting a playlist', err)
    })
})

module.exports = router
