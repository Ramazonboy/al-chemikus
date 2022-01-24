import { getElement } from "./firebase.js"
const elementI =[]
    
const elementRead=(data)=>{
    data.map((item)=>{
        elementI.push({
            nomi:item.elementName,
            formulasi:item.elementChemistryFormula
        }
    )
    })
}
const a=getElement(elementRead)
console.log(elementI.length);
export { elementI }