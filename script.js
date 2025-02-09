const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Note = require('./Model/notemodel');
const User = require('./Model/usermodel');
const PORT = 8000;

app.use(express.json());
app.use(cors());



// User registration
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.create({ username, password });
        console.log(`User ${username} registered successfully`);
        res.status(201).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// User login
app.post('/login', async (req, res) => {
    try {
        const { username, password} = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const match = password === user.password;
        console.log(password, user.password);
        console.log(match);
        if(match) {
            console.log("User logged in successfully");
            res.status(200).json(user);
            
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});



// Add note
app.post('/notes', async (req, res) => {
    try {
        const note = await Note.create({ ...req.body, userId: req.userId, createdBy: req.username, lastEditedBy: req.username });
        console.log(`Note created successfully at ${note.createdAt}`);
        res.status(200).json(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Get notes by user
app.post('/notesbyuser', async (req, res) => {
    try {
        const usernameID = req.body;
        const notes = await Note.find({ usernameID: { $eq: req.body.usernameID } });
        res.status(200).json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.put('/notes/:id', async (req, res) => {
    try {
      const note = await Note.findOneAndUpdate(
        { _id: req.params.id },
        { 
          ...req.body, 
          lastEditedBy: req.username,
          updatedAt: new Date()
        },
        { new: true }
      );
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      console.log(`Note with id ${req.params.id} updated successfully at ${note.updatedAt}`);
      res.status(200).json(note);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

// Delete note
app.delete('/notes/:id', async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        console.log(`Note with id ${req.params.id} deleted successfully`);
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log('Node is running on port 8000');

    mongoose.connect('mongodb+srv://Admin:zCLYukaSLbvmlGMg@cluster0.qrlvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
        console.log('Connected to MongoDB');
    });
});