const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/foo/:id', (req, res) => {
    eval('console.log("something", ' + req.params.id + ')');
    res.send(`Hello ${req.params.id}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
