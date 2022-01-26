import { getElement1 } from "./firebase.js"
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
 const a = getElement1(elementRead)

export { elementI }