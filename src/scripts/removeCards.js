import{addContainerClass,showValues,} from "./index.js"
import{ zeroCards} from "./addCards.js"
import { insertedValues,} from "./valuesData.js";

export  const removeCard = (card, array) => {
  const id = card.id 
  card.remove()
  const index = array.findIndex((element) =>  element.id ===  parseInt(id))
  array.splice(index,1)
  
  showValues(insertedValues)
  zeroCards(insertedValues)
  addContainerClass()
}

export  function clearCards() {
  const sectionThird = document.querySelector(".section__third");
  sectionThird.innerHTML = "";
}