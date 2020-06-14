let db = require('../models/queue')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.Queue.findOne({
        user: req.params.user
    })
    .then((queueData) => {
        res.send(queueData)
    })
    .catch(err => {
        console.log('Error in GET route for the queue', err)
    })
    res.send('Hit queue get route')
})

router.post('/', (req, res) => {
    db.create({
        user: req.body.user
    })
    .then(() => {
        res.send({message: "Queue body was made", status: "200"})
    })
    .catch(err => {
        console.log('Error in creating instance of Queue', err)
    })
    
})

module.exports = router