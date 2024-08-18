import express from 'express';
import {PORT} from './config.js';
import cors from 'cors';
import mongoose from 'mongoose';
import { TodoModel } from './Models/TodoTask.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/add", (req, res) => {
    const task = req.body;
    if (!task) {
        return res.status(500).json({message : "Task is not valid BRO"});
    }
    TodoModel.create(task)
    .then((result => res.status(200).json(result)))
    .catch((err) => res.status(500).json(err));
    console.log(task);
});

app.get("/", (req, res) => {
    TodoModel.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
    
});

app.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete(id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({message : err.message}));
});

app.put("/update/:id/:done", (req, res) => {
    const {id, done} = req.params;
    const doneStatus = done === "true";
    TodoModel.findByIdAndUpdate(id, {done : doneStatus }, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({message : err.message}));
});


mongoose.connect("mongodb+srv://root:root@todolist.2bt8z.mongodb.net/?retryWrites=true&w=majority&appName=TodoList")
.then(() => {
    app.listen(PORT, () => console.log(`Backend Listening on Port : ${PORT}`));
})
.catch((err) => console.log(err));