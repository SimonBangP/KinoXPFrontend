export function addOne() {
    document.getElementById("update-btn").onclick = makeNewUpdate
    function makeNewUpdate() {

        const newWorkSched = {}
        const workDayRequest = {}
        workDayRequest.date = document.getElementById("bdate").value
        workDayRequest.employeename = document.getElementById("employee").value
        const startTime = {}
        startTime.starttime = document.getElementById("starttime").value
        const endTime = {}
        endTime.endtime = document.getElementById("endtime").value
        newWorkSched.worktask = document.getElementById("worktask").value
        newWorkSched.worktaskdescription = document.getElementById("taskdescription").value

        var manualJSON = "{\n" +
            "  \"workDayRequest\": {\n" +
            "    \"workDate\": \"" + workDayRequest.date + "\",\n" +
            "    \"employeeFullName\": \"" + workDayRequest.employeename + "\"\n" +
            "  },\n" +
            "  \"startTime\": \"" + startTime.starttime + ":00\",\n"+
            "  \"endTime\": \"" + endTime.endtime + ":00\",\n" +
            "  \"description\": \""+newWorkSched.worktaskdescription+"\",\n" +
            "  \"taskName\": \""+newWorkSched.worktask+"\"\n" +
            "}"

        const options = {}
        options.method = "POST"
        options.headers = {"Content-type": "application/json"}
        options.body = manualJSON
        console.log(options)

        var xhr = new XMLHttpRequest();
        var url = "http://localhost:8080/api/v1/workdays/tasks";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json)
            }
        };
        var data = options
        xhr.send(data);

    }
}