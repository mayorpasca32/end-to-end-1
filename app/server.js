const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/workouts', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'workouts.html'));
});

app.listen(port, () => {
  console.log(`Bodybuilder Hub running on http://localhost:${port}`);
});
