/* Desenvolva sua lógica aqui */
import { valuesCategory, insertedValues } from "./valuesData.js";

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

}

renderCards(insertedValues);


const removeCard = (card) => card.remove()

// const persons = [
  //   { name: 'John', age: 30 },
  //   { name: 'Jane', age: 25 },
  //   { name: 'Bob', age: 40 },
//   { name: 'Alice', age: 35 }
// ];
// const totalAges = persons.reduce((accumulator, person) => accumulator + person.age, 0);
// console.log(totalAges);

function addNewValue(insertedValues) {
  
  const buttonValue = document.querySelector(".div-button-value")
  buttonValue.addEventListener("click", function(e){
    e.preventDefault()
  
  const modalInput = document.querySelector(".modal-input")
  const valueTitle = modalInput.value
  
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
}
addNewValue(insertedValues)

const zeroCards = () => {
  if (insertedValues.length) {
    const sectionThird = document.querySelector(".section__third");
    const divContainer = document.createElement("div");
    const noValueTitle = document.createElement("h2");
    const noValueText = document.createElement("p");
   
    divContainer.classList.add("div__container-no-value");
    
   
    noValueTitle.classList.add("noValue-title");
    noValueTitle.textContent = "Nenhum valor cadastrado";
    
  
    noValueText.classList.add("noValue-text");
    noValueText.textContent = "Registrar novo valor";
    
    
    divContainer.append(noValueTitle,noValueText);
    
    sectionThird.appendChild(divContainer);
  }
}
zeroCards()

