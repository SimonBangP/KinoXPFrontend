

const URL = "http://localhost:8081/api/worktasks/taskname"


async function showAll() { //We will add errorhandling when we meet in the class
    const allTaskNames = await fetch(URL).then(r => r.json())
    const tableRows = allTaskNames.map(taskName => `
          <tr>
            <td>${taskName.id}</td>
            <td>${taskName.taskName}</td>
            
          </tr>
        `
    ).join("")
    document.getElementById("tbl-taskname-body").innerHTML = tableRows
}

/*import "https://unpkg.com/navigo"  //Will create the global Navigo object used below


import {
    setActiveLink, adjustForMissingHash, renderTemplate, loadHtml
} from "./utils.js"

import { initNavigate } from "./pages/navigate/navigate.js"
import { showMatchObject } from "./pages/show-match/match.js"
import { initUsers } from "./pages/users/users.js"
import { initFindUser } from "./pages/findUser/findUser.js"

window.addEventListener("load", async () => {

    const templateAbout = await loadHtml("./pages/about/about.html")
    const templateUsers = await loadHtml("./pages/users/users.html")
    const templateFindUser = await loadHtml("./pages/findUser/findUser.html")
    const templateEmployee = await loadHtml("./sites/employee/employee.html")
    const templateMatch = await loadHtml("./pages/show-match/match.html")
    const templateNotFound = await loadHtml("./pages/notFound/notFound.html")

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
      </p>
     `,
            "/about": () => renderTemplate(templateAbout, "content"),

            "/users": () => {
                renderTemplate(templateUsers, "content")
                initUsers()
            },
            "/employee": (match) => {
                renderTemplate(templateEmployee, "content")
                initFindEmployee(match)
            },

            "/navigate-programatically": () => {
                renderTemplate(templateNavigate, "content")
                initNavigate()
            },

            "/show-match": (match) => {
                renderTemplate(templateMatch, "content")
                showMatchObject(match)
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
}*/