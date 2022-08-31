export function TaskList({task, taskIndex, handleTrash, handleComplete}) {
    return (
      <div className="taskItem">
        <div onClick={()=>handleComplete(taskIndex)}>{task.title}</div>
        <button onClick={() => handleTrash(taskIndex)}><img src="https://img.icons8.com/color/48/000000/trash--v1.png" alt="trash can icon"/></button>
      </div>
    )
}

