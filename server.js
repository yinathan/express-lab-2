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

const magicBall = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (req, res) => {
    let question = req.params.question
    let randomElement = magicBall[Math.floor(Math.random() * magicBall.length)];
    res.send(`<html>
    <body>
    <h1>${question.charAt(0).toUpperCase()}${question.slice(1)}</h1>
    <h1>${randomElement}</h1>
    </body>
    </html>`)
})

