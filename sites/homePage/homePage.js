export async function initEmployeeSchedule () {
    var workdays = await getWorkdays();

    console.log(workdays)
    workdays.map(workday => {
     let content = document.createElement("p");
    content.innerText =
     "[ "
     + workday.employee.role
    + " ] "
    + workday.employee.firstName
    + " -  "
    + workday.workTasks[0].startTime
    + " - "
    + workday.workTasks[0].endTime
            document.getElementById("box-content").appendChild(content)
    }

    )


}





async function getWorkdays () {
    return await fetch("http://localhost:8080/api/v1/workdays").then(r => r.json());
}