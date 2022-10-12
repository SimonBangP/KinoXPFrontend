
export async function initTimetable() {
    var timetable = new Timetable();
    timetable.setScope(8,0);
    let employees = await getAllEmployees();
    console.log(employees);
    console.log(getTaskDateTime(employees[0].workDays[0].workDate, employees[0].workDays[0].workTasks[0].startTime))
    employees.map(employee => {
        timetable.addLocations([{"id": employee.id, "name": employee.firstName + " " + employee.lastName}]);
        employee.workDays[0].workTasks.map(task => {
            timetable.addEvent(task.description, employee.id, getTaskDateTime(employee.workDays[0].workDate, task.startTime), getTaskDateTime(employee.workDays[0].workDate, task.endTime), {class: task.name.taskName, onClick: function(event) {
                    window.alert(task.description);
                }})
        });
    })

    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable');
    addDescription();
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
function addDescription(){
    var allSpans = document.getElementsByTagName('span');
    for (var i = 0; i < allSpans.length; i++) {
       if(allSpans[i].className.includes('time-entry')){
           let event = document.getElementsByClassName(allSpans[i].className)[0];
           let text = document.createElement('strong');
           text.innerHTML=(allSpans[i].className.replaceAll('time-entry ',''));
           event.insertBefore(text,event.children[0]);
           //innerHTML+=('<strong>'+allSpans[i].className.replaceAll('time-entry ','')+'</strong>')
       }
    }
}
/*
const form = document.getElementById('editScheduleForm');
form.addEventListener('submit', callbackFunction);
function callbackFunction(event) {
    console.log("TEST")
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
}*/

