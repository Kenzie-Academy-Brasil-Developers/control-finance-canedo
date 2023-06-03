/* Desenvolva sua lógica aqui */
function openModal(){
  const modalContainer = document.querySelector('.modal__container')
  const buttonRegister = document.querySelector('.button-register')

  buttonRegister.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.showModal()
  })
}
openModal()

function closeModal(){
  const modalClose = document.querySelector(".modal-close")
  const modalContainer = document.querySelector('.modal__container')

  modalClose.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.close()
  })
}
closeModal()