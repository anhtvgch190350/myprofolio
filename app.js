//import libary
const express = require('express')
const app = express()

app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', async(req, res) => {
    res.render('index')
});


const PORT = process.env.PORT || 8000
const port = 8000
app.listen(PORT)
console.log(`Server is running at "http://localhost:${port}"`)