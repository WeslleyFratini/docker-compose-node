const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.get("/" , (req, res) => {
  res.send("Bem vindo ao aulao de docker da mentoria tech")
})

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}, http:localhost:${port}`)
})