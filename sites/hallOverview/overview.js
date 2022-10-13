
export async function initTimetableHalls() {
    var timetable = new Timetable();
    timetable.setScope(8,0);
    let halls = await getAllHalls();
    console.log(halls);
    halls.map(hall => {
        timetable.addLocations([{"id": hall.hallNumber, "name": "Sal " + hall.hallNumber}]);
        hall.movies.map(movie => {
            timetable.addEvent("Genre: " + movie.genres, hall.hallNumber, new Date(movie.startTime), new Date(movie.endTime), {class: movie.name, onClick: function(event) {
                    window.alert(movie.description);
                }})
        });
    })

    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable');
    addDescription();
}


async function getAllHalls() {
    return await fetch("http://localhost:8080/api/v1/halls").then(r => r.json());
}

function getTaskDateTime(startDate, endTime) {
    let date = new Date(startDate + " 00:00:00");

    let dateParts = endTime.split(':');

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