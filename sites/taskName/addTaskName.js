
export function openForm() {
    document.getElementById("myForm").style.display = "block";
}

export function closeForm() {
    document.getElementById("myForm").style.display = "none";

}

export function addTaskName() {
    document.getElementById("btn-add-task").onclick = addNewTask

}

export function addNewTask (){

  const newTask = {}
  newTask.taskName = document.getElementById("input-taskname")

    const options = {}
    options.method = "POST"
    options.headers = { "Content-type": "application/json" }
    options.body = JSON.stringify(newTask)
}
