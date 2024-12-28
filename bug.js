const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  const user = users.find(user => user.id === userId);
  if (!user) {
    // Should return a 404 Not Found
    res.send('User not found'); 
  }
  res.json(user);
});

// ...rest of the code