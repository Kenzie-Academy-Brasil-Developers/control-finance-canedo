/* Desenvolva sua lógica aqui */
import { valuesCategory, insertedValues } from "./valuesData.js";

export function renderCards(insertedValues){
  const sectionThird = document.querySelector(".section__third")

  for(let i = 0; i<insertedValues.length; i++){
    const value = insertedValues[i]

    const cardsContainer = document.createElement("div")
    const divCard = document.createElement("div")
    const cardTitle = document.createElement("p")
    const buttonWithImage = document.createElement("div")
    const cardButton = document.createElement("button")
    const cardImage = document.createElement("figure")
    const imageTrash = document.createElement("img")
    
    cardTitle.innerText = value.value
    imageTrash.src = "./src/assets/trash.svg"


    cardsContainer.classList.add("cards__container")
    divCard.classList.add("div-card")
    cardTitle.classList.add("card-title")
    buttonWithImage.classList.add("button-with-image")
    cardButton.classList.add("card-button")
    cardImage.classList.add("card-image")

    sectionThird.appendChild(cardsContainer)
    cardsContainer.appendChild(divCard)
    divCard.append(cardTitle,buttonWithImage)
    buttonWithImage.append(cardButton, cardImage)
    cardImage.appendChild(imageTrash)

  }
}
renderCards(insertedValues)

