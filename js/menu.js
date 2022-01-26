import { getJadval ,getElement, signOutFB} from "./firebase.js"
import { table1 } from "./function.js"
import { jadvalYarat } from "./game.js"
import {  index } from "./index.js"
import { signUp } from "./reg.js"


function home(e){
    
    const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        liS[e-1].classList.add("active")
        index()
}



function gameC(e){
    const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        liS[e-1].classList.add("active")
        getJadval(jadvalYarat)
    
}


const modda = (e)=>{
    const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        liS[e-1].classList.add("active")
        getElement(table1)
    
}


const about = (e)=>{
    const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        liS[e-1].classList.add("active")
       
    
}
const logout = ()=>{
    signOutFB(signUp);
}
window.home=home
window.gameC=gameC
window.logout=logout
window.modda=modda
window.about=about
export {logout,about,gameC,home,modda}