const express = require('express');

const app = express();

// Index route
app.get('/test', (req, res) => {
  res.send('Testing index');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})