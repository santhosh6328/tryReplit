const express = require('express');

const app = express()
const port = 3000;

app.get('/', (req, res)=> {
  res.send("hello world from replit;")
});

app.listen(port, () => {
  console.log(`application is listening on ${port}`);
});