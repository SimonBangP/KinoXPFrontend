export async function initTimetable() {
    var timetable = new Timetable();

    timetable.setScope(14,2);
    let employees = await getAllEmployees();
    console.log(employees);
    console.log(getTaskDateTime(employees[0].workDays[0].workDate, employees[0].workDays[0].workTasks[0].startTime))
    employees.map(employee => {
        timetable.addLocations([{"id": employee.id, "name": employee.firstName + " " + employee.lastName}]);
        employee.workDays[0].workTasks.map(task => {
            timetable.addEvent(task.name.taskName + "\n\r•" + task.description + "", employee.id, getTaskDateTime(employee.workDays[0].workDate, task.startTime), getTaskDateTime(employee.workDays[0].workDate, task.endTime))
        });
    })

    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable');
}

async function getAllEmployees() {
    return await fetch("http://localhost:8080/api/v1/employees").then(r => r.json());
    
}

function getTaskDateTime(workDate, taskTime) {
    let date = new Date(workDate + " 00:00:00");

    let dateParts = taskTime.split(':');

    date.setTime(date.getTime() + dateParts[0] * 60 * 60 * 1000);
    date.setTime(date.getTime() + dateParts[1] * 60 * 1000);
    date.setTime(date.getTime() + dateParts[2] * 1000);

    return date;
}
