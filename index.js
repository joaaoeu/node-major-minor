const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

const checkAgeQueryParam = (req, res, next) => {
  const { age } = req.query
  if (!age) return res.redirect('/')
  return next()
}

app.get('/', (req, res) => {
  return res.render('init')
})

app.post('/check', (req, res) => {
  const { age } = req.body
  return age >= 18
    ? res.redirect(`/major?age=${age}`)
    : res.redirect(`/minor?age=${age}`)
})

app.get('/major', checkAgeQueryParam, (req, res) => {
  const { age } = req.query
  return res.render('major', { age })
})

app.get('/minor', checkAgeQueryParam, (req, res) => {
  const { age } = req.query
  return res.render('minor', { age })
})

app.listen(3001)
