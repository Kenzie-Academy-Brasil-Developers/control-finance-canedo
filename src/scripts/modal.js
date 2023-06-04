/* Desenvolva sua lógica aqui */
import { renderCards } from "./index.js";
import { valuesCategory, insertedValues } from "./valuesData.js";

function openModal(){
  const modalContainer = document.querySelector('.modal__container')
  const buttonRegister = document.querySelector('.button-register')

  buttonRegister.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.showModal()
  })
  addNewValue()
}
openModal()

function closeModal(){
  const modalClose = document.querySelector(".modal-close")
  const modalContainer = document.querySelector('.modal__container')
  const buttonCancel = document.querySelector('.div-button-cancel')

  modalClose.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.close()
  })

  buttonCancel.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.close()
  })
}
closeModal()

function addNewValue() {
  
  let buttonValue = document.querySelector(".div-button-value")
  buttonValue.addEventListener("click", function(e){
  e.preventDefault()
  
  let modalInput = document.querySelector(".modal-input")
  let valueTitle = modalInput.value
  
  const entradaBtn = document.getElementById("buttonEnter");
  const saidaBtn = document.getElementById("buttonExit");

  let valorSelecionado = "";

  if (entradaBtn.checked) {
    valorSelecionado = entradaBtn.value;
  } else if (saidaBtn.checked) {
    valorSelecionado = saidaBtn.value;
  }
  

  insertedValues.push({
    value: valueTitle,
    categoryID: valorSelecionado
  });
  

  
  modalInput.value = ""

  renderCards(insertedValues)
})
}

