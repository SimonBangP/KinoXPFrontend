export async function initTimetable() {
    var timetable = new Timetable();
    timetable.setScope(8,0);
    let movies = await getAllMovies();
    console.log(movies);
    movies.map(movie => {
        timetable.addLocations([{"id": movie.id, "name": movie.name + " " + movie.length}]);
        movie.name[0].map(task => {
            timetable.addEvent(task.description, movie.id, {class: movie.name, onClick: function(event) {
                    window.alert(movie.description);
                }})
        });
    })

    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable');
    addDescription();


    async function getAllMovies() {
        return await fetch("http://localhost:8080/api/v1/movies").then(r => r.json());
    }
}