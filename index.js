const mongoose = require('mongoose')
const articleModel = require('./article')

mongoose.connect('mongodb://localhost:27017/aprendendoMongo', { useNewUrlParser: true, useUnifiedTopology: true })

const Article = mongoose.model('Article', articleModel)

Article.find({ 'resume.author': 'Joaby' }).then(articles => {
  console.log(articles)
}).catch(err => {
  console.log(err)
})

Article.findByIdAndDelete('60d9f8f837a68624c8978489').then(() => {
  console.log('Artigo excluído com sucesso')
}).catch(err => {
  console.log(err)
})

const artigo = new Article({
  title: 'Aprendendo C# do ZERO',
  author: 'Joaby',
  body: 'Será que você consegue aprender algo tão incrível? (:',
  special: true,
  resume: {
    content: 'Esse assunto é muito interessante!',
    author: 'Joaby'
  }
})

artigo.save().then(() => {
  console.log('Artigo salvo!')
}).catch(err => {
  console.log(err)
})
