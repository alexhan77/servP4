let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/animaniadb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

module.exports.User = require('./user')
module.exports.Comment = require('./comment')
module.exports.favAnime = require('./favAnime')
