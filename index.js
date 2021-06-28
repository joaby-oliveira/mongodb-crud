const mongoose = require('mongoose')
const articleModel = require('./article')

mongoose.connect('mongodb://localhost:27017/aprendendoMongo', { useNewUrlParser: true, useUnifiedTopology: true })

const Article = mongoose.model('Article', articleModel)

const artigo = new Article({ title: 'Aprendendo Mongo com NodeJS', author: 'Joaby', body: 'Faça a conexão com o node e seja feliz (:' })

artigo.save().then(() => {
  console.log('Artigo salvo!')
}).catch(err => {
  console.log(err)
})
