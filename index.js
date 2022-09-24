const express = require('express')
const app = express()

const greeting = require('./Middleware')
app.use('/mid', greeting)


app.get("/list", (req, res) => {
res.json({
    name: 'iPad 32Gb',
    price: 1889.00
})
})

app.get('/customers/:id', (req, res) => {
    res.send(`Customer ${req.params.id} selected!`)
})

app.listen(3000, () => {
    console.log('backend tá executando...')
})