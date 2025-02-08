const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Note = require('./Model/notemodel')
const PORT = 8000;


app.use(express.json());
app.use(cors())


app.post('/notes', async(req, res) => {
    console.log("trigger notes", req.body)
    try {
        const note = await Note.create(req.body)
        res.status(200).json(note)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

app.get('/notes', async(req, res) => {
    try {
        const notes = await Note.find({})
        res.status(200).json(notes)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

app.delete('/notes/:id', async (req, res) => {
    try {
      const note = await Note.findByIdAndDelete(req.params.id);
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });


    app.listen(PORT, () => {
        console.log('Node is running on port 8000')
        
        mongoose.
        connect('mongodb+srv://Admin:zCLYukaSLbvmlGMg@cluster0.qrlvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
            console.log('Connected to MongoDB')
        }) 
})




