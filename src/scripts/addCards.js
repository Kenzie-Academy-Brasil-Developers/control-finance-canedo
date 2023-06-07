import{addContainerClass,showValues,} from "./index.js"
import { valuesCategory, insertedValues,} from "./valuesData.js";
import{removeCard} from "./removeCards.js"


export const zeroCards = (listCard) => {
  const divContainer = document.querySelector(".div__container-no-value");
  
  if (divContainer) {
    if (listCard.length === 0) {
      divContainer.classList.toggle("invisible"); 
    } 
  }
}


let id = 3
export function addNewValue(insertedValues) {
  
  const buttonValue = document.querySelector(".div-button-value")
  buttonValue.addEventListener("click", function(e){
  e.preventDefault()
  
  const modalInput = document.querySelector(".modal-input")
  let valueTitle = isNaN(parseFloat(modalInput.value)) ? 0 : parseFloat(modalInput.value);
  
  const entradaBtn = document.querySelector(".modal-button-enter");
  const saidaBtn = document.querySelector(".modal-button-exit");
  const buttonCard = document.querySelector(".card-button")
  
  let valorSelecionado = "";

  if (entradaBtn.classList.contains("selected")) {
    valorSelecionado = 0;
  } else if (saidaBtn.classList.contains("selected")) {
    valorSelecionado = 1;

  }
  id = id+1
  const newValue = {
    id : id,
    value: valueTitle,
    categoryID: valorSelecionado
  };
  
  insertedValues.push(newValue);
  
  modalInput.value = "";
  
  renderCards([newValue]);


})
showValues(insertedValues)
zeroCards(insertedValues)
addContainerClass()
}
addNewValue(insertedValues)

export function renderCards(listValues) {
  const sectionThird = document.querySelector(".section__third");

  listValues.forEach((value) => {
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
    cardsContainer.id = value.id

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
      removeCard(cardsContainer, insertedValues);
      showValues(insertedValues)
      addContainerClass()   
  });
});
showValues(insertedValues)
addContainerClass()
}
renderCards(insertedValues) 

