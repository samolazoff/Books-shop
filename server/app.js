const express = require('express');
const app = express();
const port = 3001;

app.post('/registration', (req, res) => {
 console.log(res)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});