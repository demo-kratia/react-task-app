import './App.css';
import React, {useEffect, useState} from 'react';
import {TaskList} from './TaskList'
import {TaskForm} from './TaskForm'
import {CompletedList} from './CompletedList'
import {TaskCounter} from './TaskCounter'

function App() {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  const [tasks, setTasks] = useState([]);
  const [complete, setComplete] = useState([]);
  const [taskCount, setCount] = useState(0)

  useEffect(()=> {
    setCount(tasks.length);
  }, [tasks.length])

  function handleTrash(taskIndex) {
    let temp = [...tasks]
    temp.splice(taskIndex,1)
    setTasks(temp)
  }
  
  function handleComplete(taskIndex) {
    let currentTask = tasks[taskIndex]
    if(currentTask.completion) {
      currentTask.completion = false; 
    } else {
      currentTask.completion = true;
      let temp = [...complete, currentTask]
      setComplete(temp)
      tasks.splice(taskIndex,1)
    }
    setTasks(tasks);
  }
  return (
    <div className = 'container'>
      <div style= {{ color: '#9394a5', fontSize: '0.7em' }}>TASKS</div>
      <div className = "heading">{date}</div>
      <TaskCounter taskCount={taskCount}/>
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <div className="taskList">
        {tasks.map((task, i) => (
          <TaskList key={i} task={task} taskIndex={i} handleTrash={handleTrash} handleComplete={handleComplete}/>
        ))}
      </div>
      <hr></hr>
      <div style= {{ color: '#9394a5', fontSize: '0.7em' }}>COMPLETED</div>
      <div className="completedList">
        {complete.map((completedItem, i) => (
          <CompletedList completedItem={completedItem} key={i}/>
        ))}
      </div>
    </div>
    
  );
}

export default App;
