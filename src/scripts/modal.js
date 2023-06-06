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
  const buttonCancel = document.querySelector('.div-button-cancel')
  const buttonValue = document.querySelector('.div-button-value')

  modalClose.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.close()
  })

  buttonCancel.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.close()
  })

  buttonValue.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.close()
  })
}
closeModal()

function buttonClick(){
  const buttonEnter = document.getElementById("buttonEnter");
  const buttonExit = document.getElementById("buttonExit");
  const buttonValue = document.querySelector('.div-button-value')

  buttonEnter.classList.add("selected")

  buttonEnter.addEventListener("click", function() {
    buttonEnter.classList.add("selected");
    buttonExit.classList.remove("selected")
    
  });

  buttonExit.addEventListener("click", function() {
    buttonExit.classList.add("selected");
    buttonEnter.classList.remove("selected")
    
  });

}
buttonClick()


