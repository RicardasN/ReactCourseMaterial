const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const contactsRoutes = require('./routes/contacts');
const path = require('path');

const app = express();

// Connect Database
connectDB();

//Init Middleware
//Bodyparser
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', usersRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/auth', authRoutes);

//Check static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set Static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
