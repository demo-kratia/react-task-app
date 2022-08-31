import React, {useState} from 'react';

export function TaskForm({tasks, setTasks}) {
    const [newTask, setNewTask] = useState(''); 
  
    function handleSubmit(event) {
      event.preventDefault();
      if(!newTask) {return;}
      let temp = [...tasks, {title: newTask, completion: false}]
      setTasks(temp)
      setNewTask('')
    }
    return (
      <form onSubmit={handleSubmit}>
        <input id="taskInput" type="text" placeholder="Add a task" onChange={event=>setNewTask(event.target.value)} value={newTask}></input>
      </form>
    )
}

