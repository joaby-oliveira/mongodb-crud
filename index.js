const mongoose = require('mongoose')
const articleModel = require('./article')

mongoose.connect('mongodb://localhost:27017/aprendendoMongo', { useNewUrlParser: true, useUnifiedTopology: true })

const Article = mongoose.model('Article', articleModel)

const artigo = new Article({
  title: 'Aprendendo C# do ZERO',
  author: 'Joaby',
  body: 'Será que você consegue aprender algo tão incrível? (:',
  special: true,
  resume: {
    content: 'Bla bla bla, vê se faz sentido...',
    author: 'Joaby'
  }
})

artigo.save().then(() => {
  console.log('Artigo salvo!')
}).catch(err => {
  console.log(err)
})
