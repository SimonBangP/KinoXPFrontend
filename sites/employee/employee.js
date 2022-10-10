export function initTimetable() {
    var timetable = new Timetable();

    timetable.setScope(14,2);
    timetable.addLocations([
        {'id': '1', 'name': 'Sal 1'},
        {'id': '2', 'name': 'Sal 2'},
        {'id': '3', 'name': 'Sal 3'},
        {'id': '4', 'name': 'Sal 4'},
    ]);

    timetable.addEvent('Transformers', '1', new Date(2022,10,10,21,30), new Date(2022,10,10,23,0), { url: '#' });

    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable');
}
