const form = document.querySelector("form")

/**
 * Diese Methode wird aufgerufen, wenn das Formular eingereicht wird.
 * @returns {Promise<Response>}
 */
function create() { //todo

}

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  await create()
  window.location.replace("/index.html")
})
