const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Your user model

// Display the login page
router.get('/login', (req, res) => {
  res.render('login'); // Assuming you're using a view engine like EJS
});

// Handle login form submission
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      // Successful login
      res.redirect('/dashboard'); // Redirect to dashboard or another page
    } else {
      // Invalid credentials
      res.render('login', { error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
