/* Desenvolva sua lógica aqui */

import { valuesCategory, insertedValues } from "./valuesData.js";

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

// function addNewValue() {
  
//   let buttonValue = document.querySelector(".div-button-value")
//   buttonValue.addEventListener("click", function(e){
//   e.preventDefault()
  
//   let modalInput = document.querySelector(".modal-input")
//   let valueTitle = modalInput.value
  
//   let entradaBtn = document.getElementById("buttonEnter");
//   let saidaBtn = document.getElementById("buttonExit");
//   let buttonCard = document.querySelector(".card-button")

//   let valorSelecionado = "";

//   if (entradaBtn.classList.contains("selected")) {
//     valorSelecionado = 0;
//     buttonCard.innerText = "Entrada"
//   } else if (saidaBtn.classList.contains("selected")) {
//     valorSelecionado = 1;
//     buttonCard.innerText  = "Saída"

//   }
  

//   const newValue = {
//     value:` R$ ${valueTitle}`,
//     categoryID: valorSelecionado
//   };

//   insertedValues.unshift(newValue);

//   modalInput.value = "";

//   renderCards([newValue]);
// })
// }
// console.log(renderCards(insertedValues))
