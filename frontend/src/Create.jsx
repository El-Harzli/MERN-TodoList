import React, { useState } from 'react';
import axios from 'axios';

function Create({onTaskAdded}) {

    const [task, setTask] = useState("");

    const addTaskHandler = (task) => {
        axios.post("http://localhost:3000/add", {task : task})
        .then((result) => {
            console.log(result);
            onTaskAdded();
            setTask("");
        })
        .catch((err) => console.log(err));
    }
    return (
        <div>
            <input type="text" value={task} onChange={e => setTask(e.target.value)}  />
            <button onClick={() => {
                addTaskHandler(task);
                }}>Add</button>
        </div>
    )
}

export default Create