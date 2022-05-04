const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//Template engine
app.set('view engine', 'ejs')

//Render template engine route to index page
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

//Linked assets folder to local server with route prefix
app.use('/public', express.static('public'))

//Route to index
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Route to About
app.get('/about', (req, res) => {
  res.send('This is the about page.')
})

//Route to Login
app.get('/login', (req, res) => {
  res.send('This is the login page.')
})

//Error 404
app.use((req, res, next) => {
  res.status(404).send("Error 404, Sorry can't find that!") 
})

//Listens to a certain port (currently on port: 3000)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
