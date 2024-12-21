const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

app.get('/data', (req, res) => {
  res.send('Hello, this is the data!');
  console.log("sent the message");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
