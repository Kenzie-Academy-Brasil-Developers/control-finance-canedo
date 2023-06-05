/* Desenvolva sua lógica aqui */
import { valuesCategory, insertedValues, insertedValuesfiltered } from "./valuesData.js";


const zeroCards = (insertedValues) => {
  
  const divContainer = document.querySelector(".div__container-no-value");
  
  if (insertedValues.length === 0) {
    divContainer.classList.remove("invisible"); 
  }
  console.log(insertedValues)
}

function count() {
  const tableNumber = document.querySelector(".table-number"); 

  const sum = insertedValues.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0);

tableNumber.textContent = `R$ ${sum}`
}




export function renderCards(insertedValues) {
  const sectionThird = document.querySelector(".section__third");

  insertedValues.forEach((value) => {
    const cardsContainer = document.createElement("div");
    const divCard = document.createElement("div");
    const cardTitle = document.createElement("p");
    const buttonWithImage = document.createElement("div");
    let cardButton = document.createElement("button");
    const cardImage = document.createElement("figure");
    const imageTrash = document.createElement("img");

    
    cardTitle.innerText = `R$ ${value.value}`;
    imageTrash.src = "./src/assets/trash.svg";

    cardsContainer.classList.add("cards__container");
    divCard.classList.add("div-card");
    cardTitle.classList.add("card-title");
    buttonWithImage.classList.add("button-with-image");
    cardButton.classList.add("card-button");
    cardImage.classList.add("card-image");

    sectionThird.appendChild(cardsContainer);
    cardsContainer.appendChild(divCard);
    divCard.append(cardTitle, buttonWithImage);
    buttonWithImage.append(cardButton, cardImage);
    cardImage.appendChild(imageTrash);

    if (value.categoryID === 0) {
      cardButton.innerText = valuesCategory[0];
    } else if (value.categoryID === 1) {
      cardButton.innerText = valuesCategory[1];
    }

    imageTrash.addEventListener("click", function() {
      removeCard(cardsContainer);
  });
});
zeroCards(insertedValues)
count();
}
renderCards(insertedValues)






const removeCard = (card) => card.remove()

function addNewValue(insertedValues) {
  
  const buttonValue = document.querySelector(".div-button-value")
  buttonValue.addEventListener("click", function(e){
  e.preventDefault()
  
  const modalInput = document.querySelector(".modal-input")
  const valueTitle = parseFloat(modalInput.value)
  
  const entradaBtn = document.querySelector(".modal-button-enter");
  const saidaBtn = document.querySelector(".modal-button-exit");
  const buttonCard = document.querySelector(".card-button")
  
  let valorSelecionado = "";

  if (entradaBtn.classList.contains("selected")) {
    valorSelecionado = 0;
  } else if (saidaBtn.classList.contains("selected")) {
    valorSelecionado = 1;

  }
  
  const newValue = {
    value: valueTitle,
    categoryID: valorSelecionado
  };
  
  insertedValues.unshift(newValue);
  
  modalInput.value = "";
  
  renderCards([newValue]);
})
count();
}
addNewValue(insertedValues)

