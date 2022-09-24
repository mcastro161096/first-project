const express = require('express')
const app = express()

app.use("/teste", (req, res) => {
res.send("Página teste")
})

app.listen(3000, () => {
    console.log('backend tá executando...')
})