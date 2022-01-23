const express = require('express');
const app = express()

app.search('view-engine', 'ejs')

app.post('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000)