export async function initEmployeeSchedule () {
    var workdays = await getWorkdays();

    console.log(workdays)
    workdays.map(workday => {
    document.getElementById("box-content").innerText =
    "[ "
     + workday.employee.role
    + " ] "
    + workday.employee.firstName
    + " -  "
    + workday.workTasks[0].startTime
    + " - "
    + workday.workTasks[0].endTime




    })


}





async function getWorkdays () {
    return await fetch("http://localhost:8080/api/v1/workdays").then(r => r.json());
}