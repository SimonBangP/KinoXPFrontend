import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import {
    setActiveLink, adjustForMissingHash, renderTemplate, loadHtml
} from "./utils.js"

import {initTaskName} from "./sites/taskName/taskName.js"
import { initTimetable } from "./sites/employee/employee.js";

window.addEventListener("load", async () => {

    const templateTaskName = await loadHtml("./sites/taskName/taskName.html")
    const templateEmployee = await loadHtml("./sites/employee/employee.html")
    const templateSchedule = await loadHtml("./sites/schedule/schedule.html")
    const templateOverview = await loadHtml("./sites/hallOverview/overview.html")
    const templateTicketAdministration = await loadHtml("./sites/ticketAdministration/ticket.html")

    adjustForMissingHash()

    const router = new Navigo("/", { hash: true });
    //Not especially nice, BUT MEANT to simplify things. Make the router global so it can be accessed from all js-files
    window.router = router

    router
        .hooks({
            before(done, match) {
                setActiveLink("menu", match.url)
                done()
            }
        })
        .on({
            //For very simple "templates", you can just insert your HTML directly like below
            "/": () => document.getElementById("content").innerHTML =
                `<h2>Home</h2>
                <p style='margin-top:2em'>
                This is the content of the Home Route
                </p>`
            ,
            "/tasks": (match) => {
                renderTemplate(templateTaskName, "content")
                initTaskName()
            },
            "/employee": (match) => {
                renderTemplate(templateEmployee, "content")
                initTimetable()
            },
            "/schedule": (match) => {
                renderTemplate(templateSchedule, "content")
            },
            "/overview": (match) => {
                renderTemplate(templateOverview, "content")
            },
            "/ticket": (match) => {
                renderTemplate(templateTicketAdministration, "content")
            }
        })
        .notFound(() => {
            renderTemplate(templateNotFound, "content")
        })
        .resolve()
});


window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
        + ' Column: ' + column + ' StackTrace: ' + errorObj);
}