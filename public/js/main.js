// main.js

const modal = document.querySelector('#modal')
const openModals = document.querySelectorAll('.open-comments')
const closeModal = document.querySelectorAll('.close-button')
const commentsList = modal.querySelector('.comments-list')

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

Array.from(closeModal).forEach((el) => {
  el.addEventListener('click', () => {
    modal.querySelector('.create-comment--textarea').value = ''
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

    const { post, comments } = data

    console.log('data_main', data)
    console.log('post_main', post)
    console.log('comments_main', comments)

    modal.querySelector('.catName').textContent = post.catName
    modal.querySelector('.picBy').textContent = `by ${post.user.userName}`
    modal.querySelector('.catImg').src = post.imageUrl
    modal.querySelector('.caption-user').textContent = `${post.user.userName}: `
    modal.querySelector('.caption').textContent = post.caption
    modal.querySelector(
      '.create-comment',
    ).action = `posts/createComment/${postId}`

    removeAllChildNodes(commentsList)
    comments.forEach((el) => {
      console.log('el', el)
      const item = document.createElement('li')
      const div = document.createElement('div')
      const username = document.createElement('em')
      const comment = document.createElement('span')

      item.classList.add('comments-line')
      username.classList.add('userName')
      comment.classList.add('comment')
      username.textContent = `${el.user.userName}: `
      comment.textContent = el.comment

      commentsList.appendChild(item)
      item.appendChild(div)
      div.appendChild(username)
      div.appendChild(comment)
    })

    modal.showModal()
  } catch (err) {
    console.log(err)
  }
}
