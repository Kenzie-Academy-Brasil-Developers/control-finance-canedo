/* Desenvolva sua lógica aqui */
import { insertedValues } from "./valuesData.js";
import{renderCards, zeroCards} from "./addCards.js"
import{removeCard} from "./removeCards.js"
import{filtersCards} from "./filterCards.js"



export  function showValues(array) {
  const tableNumber = document.querySelector(".table-number"); 

  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0);

  tableNumber.textContent = `R$ ${sum}`
}


export  function addContainerClass() {
  const cardsContainer = document.querySelectorAll(".cards__container");
  const divContainer = document.querySelector(".div__container-no-value");


  if (cardsContainer.length > 0) {
    divContainer.classList.add("invisible"); 
  }
}addContainerClass()













