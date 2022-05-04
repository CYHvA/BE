const express = require('express')
const app = express()
const port = 3000

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
