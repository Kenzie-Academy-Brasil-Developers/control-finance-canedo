import { insertedValues } from "./valuesData.js";
import{renderCards} from "./addCards.js"
import{ clearCards} from "./removeCards.js"
import{showValues,} from "./index.js"


export  function filtersCards(){
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
    showValues(insertedValuesfiltered)
  })

  buttonOutput.addEventListener("click", () => {
    const insertedValuesfiltered = insertedValues.filter(value => value.categoryID === 1)
    clearCards()
    renderCards(insertedValuesfiltered)
    showValues(insertedValuesfiltered)
  })
  
}
filtersCards()