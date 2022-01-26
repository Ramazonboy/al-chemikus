import {  getElement,getProffessor} from "./firebase.js";
import { prof } from "./olimlar.js";
import { sectionOne,table1} from "./function.js";

const index=()=>{
    
    sectionOne()
    getProffessor(prof)
    getElement(table1)

    
}
export {index}