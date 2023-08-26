const express = require('express');
const app = express();
const port = 3000;

// Middleware setup (body parsing, static files, etc.)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // Serve static files (CSS, JS, etc.)

// MongoDB connection setup (assuming you've set this up as described earlier)
// ...

// Set up your routes
const userRoutes = require('./routes/user'); // Replace with your route file
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
