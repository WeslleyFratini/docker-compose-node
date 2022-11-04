const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.get("/" , (req, res) => {
  res.send("Bem vindo ao curso de docker da UNAERP")
})

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}, http:localhost:${port}`)
})