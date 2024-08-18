import mongoose from "mongoose";

const TodoTask = new mongoose.Schema({
    task : String,
    done : {
        type : Boolean,
        default : false,
    }
});

export const TodoModel = mongoose.model("Todo", TodoTask);