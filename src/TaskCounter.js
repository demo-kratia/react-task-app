export function TaskCounter({taskCount}) {
    let output = "", status = "";
    if(taskCount <= 3) {
      output = "Light day!"
      status = "light"
    } else if (taskCount > 3 && taskCount < 6) {
      output = "Medium day!"
      status = "medium"
    } else {
      output = "Busy day!"
      status = "heavy"
    }
    return (
      <div className="status-bar" id={status}> 
        {output}
      </div>
    )
}
