const URL = "http://localhost:8080/api/v1/tasknames/taskname"


export function initTaskName() {
  showAll();
  document.getElementById("btn-get-all").onclick = () => {
    showAll();
  }
}

async function showAll() { //We will add errorhandling when we meet in the class
    const allTaskNames = await fetch(URL).then(r => r.json())
    const tableRows = allTaskNames.map(taskName => 
      `
        <tr>
          <td>${taskName.id}</td>
          <td>${taskName.taskName}</td>
          
        </tr>
      `
    ).join("")
    document.getElementById("tbl-taskname-body").innerHTML = tableRows
}