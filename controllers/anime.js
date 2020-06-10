let db = require('../models')
let router =  require(express).Router()

router.get('/anime', (req, res) => {
    db.animania.findAll
})

module.exports = router 