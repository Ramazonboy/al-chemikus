import { getJadval ,getElement} from "./firebase.js"
import { table1 } from "./function.js"
import { jadvalYarat } from "./game.js"
import { index } from "./index.js"
import { signUp } from "./reg.js"


function home(e){
    const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        e.classList.add("active")
        index()
}



function gameC(e){
    const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        e.classList.add("active")
        getJadval(jadvalYarat)
    
}


const modda = (e)=>{
    const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        e.classList.add("active")
        getElement(table1)
    
}


const about = (e)=>{
    const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        e.classList.add("active")
       
    
}
const logout = ()=>{
    signOutFB(signUp);
}
export {logout,about,gameC,home,modda}