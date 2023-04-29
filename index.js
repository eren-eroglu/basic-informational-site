const express = require('express');
const app = express();
// Serve static assets
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
