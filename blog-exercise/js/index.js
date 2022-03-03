const container = document.querySelector(".container")
const searchForm = document.querySelector(".search")

/**
 * Diese Funktion holt die Posts vom Server und rendert sie im HTML
 * @param searchTerm
 * @returns {Promise<void>}
 */
async function renderPosts(searchTerm) { //todo

        const postNode = document.createElement("article")
        postNode.classList.add("post")

        postNode.innerHTML = `
          <h2>${post.title}</h2>
          <p><small>${post.likes} Likes</small></p>
          <p>${post.body.slice(0, 200)}...</p>
          <a href="/details.html?id=${post.id}">Read more</a> |
          <button class="a delete">Delete</button>
        `

        postNode.querySelector(".delete").addEventListener("click", () => deletePost(post.id))
        container.appendChild(postNode)

}

/**
 * Diese Funktion löscht einen Post mit entsprechendem Call an den Server
 * @param id
 * @returns {Promise<void>}
 */
async function deletePost(id) { //todo

    return renderPosts(undefined)
}

renderPosts()