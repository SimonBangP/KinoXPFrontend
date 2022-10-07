const URL = "http://localhost:8081/api/worktasks/taskname"


async function showAll() { //We will add errorhandling when we meet in the class
    const allTaskNames = await fetch(URL).then(r => r.json())
    const tableRows = allTaskNames.map(taskName => `
          <tr>
            <td>${taskName.id}</td>
            <td>${taskName.taskName}</td>
            
          </tr>
        `
    ).join("")
    document.getElementById("tbl-taskname-body").innerHTML = tableRows
}