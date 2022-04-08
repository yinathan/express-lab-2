const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "<h1>99 Bottles of Beer on the Wall </br> <a href='http://localhost:3000/98'>Take one down, pass it around</a></h1>"
  );
});

app.get("/:number_of_bottles", (req, res) => {
  if (
    req.params.number_of_bottles > 0
  ) {
    for (let i = 0; i < req.params.number_of_bottles; i++) {
      res.send(`<h1>${
        req.params.number_of_bottles
      } Bottles of Beer on the Wall </br> 
                <a href="http://localhost:3000/${
                  req.params.number_of_bottles - 1
                }">Take one down, Pass it around</a></h1>`);
    }
  } else{
      res.send("<h1>No more Bottles of Beer on the Wall </br> <a href='http://localhost:3000/'>Start all over</a></h1>")
  }
});

app.listen(3000, () => {
  console.log("JS is working");
});
