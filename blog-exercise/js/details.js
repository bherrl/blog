const id = new URLSearchParams(window.location.search).get("id")
const titleTextField = document.querySelector(".title")
const blogPostBody = document.querySelector(".content")
const likesParagraph = document.querySelector(".likes")
const likeButton = document.querySelector(".likeButton")

/**
 * Diese Funktion fragt den Server nach dem Post ab und stellt die Details dar.
 * @returns {Promise<void>}
 */
const renderDetails = async () => { //todo

}

renderDetails()