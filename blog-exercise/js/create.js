const form = document.querySelector("form")

/**
 * Diese Methode wird aufgerufen, wenn das Formular eingereicht wird.
 * @returns {Promise<Response>}
 */
async function create() { //todo

  const newPost = {
    "title": form.title.value,
    "body": form.body.value,
    "likes": 0,
  };

  await fetch("/posts/", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-Type": "application/json" },
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  await create()
  window.location.replace("/index.html")
})
