const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const greeting = require('./Middleware')
app.use('/mid', greeting)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.get("/list", (req, res) => {
res.json({
    name: 'iPad 32Gb', 
    price: 1889.00
})
})

app.get('/customers/report', (req, res) => {
    res.send(`Resport customer: complete = ${req.query.complete} year = ${req.query.year}`)
})

app.get('/customers/:id', (req, res) => {
    res.send(`Customer ${req.params.id} selected!`)
})

app.post('/body', (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('backend executing...')
})