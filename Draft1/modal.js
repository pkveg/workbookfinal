const modal = document.querySelector('.modal')
const modalOpen = document.querySelector('.modal_btn')
const modalClose = document.querySelector('.close_btn')

modalOpen.addEventListener("click", () => {
    modal.style.display = "block"
})

modalClose.addEventListener("click", () => {
    modal.style.display = "none"
})