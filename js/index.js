import {  getElement,getProffessor} from "./firebase.js";
import { prof } from "./olimlar.js";
import { sectionOne,table2} from "./function.js";
import { getUser } from "./getUsers.js";


const index=(data)=>{
    console.log(data);
   
    const id = data
    sectionOne()
    getProffessor(prof)
    getElement(table2)
   
    getUser(data)
    
}


export {index,}