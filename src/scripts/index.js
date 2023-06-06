/* Desenvolva sua lógica aqui */
import { valuesCategory, insertedValues, insertedValuesfiltered } from "./valuesData.js";


const zeroCards = (listCard) => {
  const divContainer = document.querySelector(".div__container-no-value");
  
  if (divContainer) {
    if (listCard.length === 0) {
      divContainer.classList.toggle("invisible"); 
    } 
  }
}


function sumValues(array) {
  const tableNumber = document.querySelector(".table-number"); 

  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0);

  tableNumber.textContent = `R$ ${sum}`
}


function excluirContainer() {
  const cardsContainer = document.querySelectorAll(".cards__container");
  const divContainer = document.querySelector(".div__container-no-value");
console.log(cardsContainer)

  if (cardsContainer.length > 0) {
    divContainer.classList.add("invisible"); 
  }
}excluirContainer()





function filtersCards(){
  const buttonAll = document.querySelector("#btnAll")
  const buttonEntry = document.querySelector("#btnEntry")
  const buttonOutput = document.querySelector("#btnOutput")
  


  buttonAll.addEventListener("click", () => {
    const insertedValuesfiltered = insertedValues.filter(value => value.categoryID === 0 || value.categoryID === 1)
    clearCards()
    renderCards(insertedValuesfiltered)
  })

  buttonEntry.addEventListener("click", () => {
    const insertedValuesfiltered = insertedValues.filter(value => value.categoryID === 0)
    clearCards()
    renderCards(insertedValuesfiltered)
    sumValues(insertedValuesfiltered)
  })

  buttonOutput.addEventListener("click", () => {
    const insertedValuesfiltered = insertedValues.filter(value => value.categoryID === 1)
    clearCards()
    renderCards(insertedValuesfiltered)
    sumValues(insertedValuesfiltered)
  })
  
}
filtersCards()


function clearCards() {
  const sectionThird = document.querySelector(".section__third"); 

  while (sectionThird.firstChild) {
    sectionThird.firstChild.remove();
  }
}



function renderCards(listValues) {
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
      sumValues(insertedValues)
      excluirContainer()
      
  });
});
sumValues(insertedValues)
excluirContainer()
}
renderCards(insertedValues)






const removeCard = (card, array) => {
  const id = card.id 
  card.remove()
  const index = array.findIndex((element) =>  element.id ===  parseInt(id))
  array.splice(index,1)
  
  sumValues(insertedValues)
  zeroCards(insertedValues)
  excluirContainer()
  
}


let id = 3

function addNewValue(insertedValues) {
  
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
sumValues(insertedValues)
zeroCards(insertedValues)
excluirContainer()
}
addNewValue(insertedValues)



