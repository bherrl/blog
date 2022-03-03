const id = new URLSearchParams(window.location.search).get("id")
const form = document.querySelector("form")

/**
 * Diese Funktion fragt den Server nach dem Post ab und fügt die Details in das Formular ein.
 * @returns {Promise<void>}
 */
async function renderEditPost() { //todo

}

/**
 * Diese Funktion sendet die Daten aus dem Formular zum Speichern an den Server.
 * @returns {Promise<Response>}
 */
function savePost() { //todo

}

form.addEventListener("submit", async(e) => {
  e.preventDefault()
  await savePost()
})

renderEditPost()
