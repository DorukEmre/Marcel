// main.js

const modal = document.querySelector('#modal')
const openModals = document.querySelectorAll('.open-comments')
const closeModal = document.querySelectorAll('.close-button')

// openModal.addEventListener('click', (e) => {
//   // const id = e.data('post')
//   console.log(e.parentElement.dataset)
//   modal.showModal()
// })

// closeModal.addEventListener('click', () => {
//   modal.close()
// })

Array.from(closeModal).forEach((el) => {
  el.addEventListener('click', () => {
    modal.querySelector('.creat-comment').reset()
    modal.close()
  })
})

Array.from(openModals).forEach((el) => {
  el.addEventListener('click', openModal)
})

async function openModal() {
  try {
    const postId = this.dataset.id
    const response = await fetch(`posts/getComments/${postId}`)
    const data = await response.json()
    console.log('data', data)

    modal.querySelector('.catName').textContent = data.catName
    modal.querySelector('.picBy').textContent = data.user
    modal.querySelector('.catImg').src = data.imageUrl
    modal.querySelector('.caption').textContent = data.caption
    modal.querySelector(
      '.creat-comment',
    ).action = `posts/createComment/${postId}`

    // Comments
    // <em class="userName"><%= comments[i].user.userName%>: </em>
    // <span class="comment"><%= comments[i].comment%></span>

    modal.showModal()
  } catch (err) {
    console.log(err)
  }
}
