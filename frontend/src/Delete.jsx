import axios from 'axios'
import React from 'react'

function Delete({task, onTaskDelete}) {

    const deleteHandler = () => {
        axios.delete("http://localhost:3000/delete/" + task._id )
        .then(() => onTaskDelete())
        .catch((err) => console.log(err));
    }
  return (
    <span>
        <button onClick={() => {
          deleteHandler();
          console.log(task);
        }}>
            Delete
        </button>
    </span>
  )
}

export default Delete