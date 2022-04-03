const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send(`WORKING`)
})

app.get("/greeting", (req, res) => {
    res.send(`Hello, Stranger`)
})
app.get("/greeting/:name", (req, res) => {
    res.send(`Hello there, ${req.params.name}!`)
})
app.listen(3000, () => {
    console.log("js is working")
})

app.get("/tip/:total/:percentage", (req, res) => {
    let total = parseInt(req.params.total)
    let percentage = parseInt(req.params.percentage)
    let tip = (total * percentage) / 100
    res.send(`${tip}`)
})
