export function initTimetable() {
    var timetable = new Timetable();
    timetable.setScope(14,2)
    timetable.addLocations([
        {'id': '1', 'name': 'Sal 1'}, 
        {'id': '2', 'name': 'Sal 2'}, 
        {'id': '3', 'name': 'Sal 3'}, 
        {'id': '4', 'name': 'Sal 4'}, 
    ]);
    timetable.addEvent('Transformers', '2', new Date(2022,10,9,22,0), new Date(2022,10,10,1,0));
    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable');
}
