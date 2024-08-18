import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyCheckbox({ task, onTaskUpdated }) {

    const [done, setDone] = useState(task.done);  // Initialize with task.done

    // Effect to update state when task prop changes
    useEffect(() => {
        setDone(task.done);
    }, [task]);
    
    const updateHandler = (myDone) => {
        axios.put(`http://localhost:3000/update/${task._id}/${myDone}`)
        .then((res) => {
            onTaskUpdated();
        })
        .catch((err) => console.log(err));
    }

    return (
        <input 
            type="checkbox" 
            checked={done}  // Use 'checked' instead of 'value'
            onChange={(e) => {
                const checked = e.target.checked;
                setDone(checked);
                updateHandler(checked);
            }} 
        />
    );
}

export default MyCheckbox;
