import { signOutFB,getJadval, getElement } from "./firebase.js";
import {   kimyoviyFormulaYozish } from "./formula.js"
import { jadvalYarat, scoreNumber } from "./game.js";
import { index } from "./index.js";

import { signUp } from "./reg.js";

const body = document.querySelector('body')
const sect = document.querySelector('#sect')

const randNum = (num) => {
    return Math.floor(Math.random() * num)
}

const createElement = (tagName, innerHTML, className, father) => {
    const element = document.createElement(tagName);
    element.innerHTML = innerHTML;
    element.className = className;

    father && father.append(element);

    return element;
};

const sectionOne = () => {

    sect.innerHTML=''
    const sect1 = createElement('section', '', 'container-fluid ', sect)
    const sectOneDiv = createElement('div', '', 'row sectOne justify-content-center align-items-center', sect1)
    const colLeft = createElement('div', '', 'col-md-4', sectOneDiv)
    const mediaQ=window.matchMedia('(max-width:576px)')
    const colLeftH1 = createElement('h1', `<span class="text-danger"> al-ChemikuS </span>bilan muvaffiqiyatga erishing`, 'text-center', colLeft)
    const colRight = createElement('div', '', 'col-md-8', sectOneDiv)
    const colRightImg = createElement('img', '', 'w-100 ', colRight);
    colRightImg.src = "./image/probirka.gif"
    if (mediaQ.matches)
    {
        sectOneDiv.classList.remove('sectOne')
        sectOneDiv.classList.add('my-5')
        colRight.classList.add('my-5')
        colRight.classList.add('mb-5')
        colLeft.classList.add('my-5')

console.log('mediaaa');
}
    else 
    {
        colRight.classList.remove('my-2')
        colRight.classList.remove('mb-5')
        colLeft.classList.remove('my-2')
        sectOneDiv.classList.remove('my-2')
        sectOneDiv.classList.add('sectOne')
    console.log(mediaQ);
    }
    
}
const headerRender = () => {
    body.innerHTML = ''
    const header = createElement('header', '', 'sticky-top d-flex justify-content-center  align-items-center' , body);
    header.style.height='10vh'
    const container = createElement("div", "", "container-fluid m-0 p-0", header);


    const menu = createElement('div', '', 'menu d-flex justify-content-around  align-items-center  ', container)

    const ul = createElement('ul', '', ' d-flex justify-content-between w-75 align-items-center py-2', menu)
    const div = createElement('div', '', 'd-flex justify-content-center align-items-center py-2', menu)
    const home = createElement('li', ``, 'li active', ul)
    const homeI = createElement('i', "", 'fas fa-home', home)
    const homeP = createElement('p', "Home", '', home)
    home.addEventListener('click', () => {
        const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        home.classList.add("active")
        index()
    })
    const game = createElement('li', ``, 'li', ul)
    const gameI = createElement('i', "", 'fas fa-gamepad', game)
    const gameP = createElement('p', "Game", '', game)
    game.addEventListener('click', () => {
        const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        game.classList.add("active")
        getJadval(jadvalYarat)
    })
    const about = createElement('li', ``, 'li', ul)
    const aboutI = createElement('i', "", 'fas fa-address-card', about)
    const aboutP = createElement('p', "About Us", '', about)
    about.addEventListener('click', () => {
        const liS = document.querySelectorAll('.menu .li')
        for (const item of liS) {
            if (item.classList.contains('active'))
                item.classList.remove('active')

        }
        about.classList.add("active")
    })
    const personImg = createElement('i', '', ' fas fa-user-tie li'  , div)

    const btnSignOut = createElement('button', 'singout', 'btn btn-primary', div)

    btnSignOut.addEventListener('click', () => {
        signOutFB(signUp);
        // console.log(dfdsf);
    })

};

const refresh = () => {
    sect.innerHTML = "";
    const div = document.createElement("div")
    div.className = 'refresh'
    const aa = document.createElement('h1')
    aa.innerHTML = `Your Score : ${scoreNumber}`
    const btn = document.createElement('button')
    btn.className = "btn btn-primary"
    btn.innerHTML = ` <i class="fas fa-redo    " ></i > `;
    btn.addEventListener('click', () => {
        getJadval(jadvalYarat);
    })
    div.append(aa, btn)
    sect.append(div)

    // let oldBestScore = +localStorage.getItem("score");

    //yourScore.innerHTML = scoreNumber;
    
    localStorage.setItem("score", scoreNumber);

    let allScores = JSON.parse(localStorage.getItem("allScores")) || [];

    let scores = [...allScores, scoreNumber].sort((a, b) => a - b);
    scores = [...new Set(scores)];

    let topScores = scores.slice(-7);
    console.log(topScores);

    localStorage.setItem("allScores", JSON.stringify(scores));
    const table = document.createElement('table')
    table.className = 'table table-dark table-striped w-50 text-center'
    const thead = document.createElement('thead')
    const trh = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    th1.innerHTML = "T/r"
    th2.innerHTML = "Ball"
    trh.append(th1, th2)
    thead.append(trh)
    const tbody = document.createElement('tbody')

    topScores.reverse()
    topScores.map((s, i) => {
        const tr = document.createElement("tr");
        console.log("sss", s, i);
        const td1 = document.createElement("td");
        td1.innerHTML = i + 1;
        td1.className = "fw-bold";

        const td2 = document.createElement("td");
        td2.innerHTML = s;


        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.append(tr)
        console.log(tbody);
    });
    table.append(thead, tbody);
    console.log(table);
    div.append(table)

};

//getElement(table1);
function table1(data) {
    // console.log(data);
    sect.innerHTML=''
    const div = createElement('div','','bg-dark',sect)
    const container = createElement('div','','container',div)
    const table = createElement('table', "", "table table-dark table-striped  ", container);
    const thead = createElement('thead', "", "", table);

    const tr = createElement('tr', "", "", thead)
    const th1 = createElement('th', '#', '', tr)
    const th2 = createElement('th', 'Element Nomi', '', tr)
    const th3 = createElement('th', 'Kimyoviy Formulasi', '', tr)
    const tbody = createElement('tbody', '', '', table)
    const a = Object.entries(data);
    console.log(a);
    a.map((item) => {
        const tr = createElement('tr', "", "", tbody)
        const td1 = createElement('td', `${item[1].uid + 1}`, '', tr)
        const td2 = createElement('td', `${item[1].elementName}`, '', tr)
        const td3 = createElement('td', kimyoviyFormulaYozish(`${item[1].elementChemistryFormula}`), '', tr)

    })
    console.log("chizildi");
}
function table2(data,index) {
    // console.log(data);
    const sectOlimlar =createElement('section','','bg-white  py-5',sect)
    const h1Olimlar = createElement('h1','Murakkab moddalarning kimyoviy formulasi','text-center text-dark  ', sectOlimlar)
    const div = createElement('div','','container',sectOlimlar)

    const table = createElement('table', "", "table table-light table-striped ", div);
    const thead = createElement('thead', "", "", table);

    const tr = createElement('tr', "", "", thead)
    const th1 = createElement('th', '#', '', tr)
    const th2 = createElement('th', 'Element Nomi', '', tr)
    const th3 = createElement('th', 'Kimyoviy Formulasi', '', tr)
    const tbody = createElement('tbody', '', '', table)
    const a = Object.entries(data);
    console.log(a);
    let indexTable=index
    console.log(indexTable);
    let mapBreak=true;
    a.map((item) => {
        
        if (item[1].uid<=indexTable+9&&item[1].uid>=indexTable) {
            
            mapBreak=true
        }
        else mapBreak=false
        if(mapBreak){
        const tr = createElement('tr', "", "", tbody)
        const td1 = createElement('td', `${item[1].uid + 1}`, '', tr)
        const td2 = createElement('td', `${item[1].elementName}`, '', tr)
        const td3 = createElement('td', kimyoviyFormulaYozish(`${item[1].elementChemistryFormula}`), '', tr)
        }

       
        
    }) 
    const btnDiv=createElement('div','','d-flex justify-content-end',div)
    const btnTable= createElement('button','To\'liq','btn btn-primary text-center',btnDiv)
   
    btnTable.addEventListener("click",()=>{
        sectOlimlar.innerHTML=''
        sectOlimlar.classList.remove('bg-white')
        sectOlimlar.classList.remove('py-5')
        if (a.length>indexTable+9)
        getElement(table2,indexTable+10)
        else getElement(table2)
    })

}
export { body,sect, headerRender, randNum, createElement, refresh, sectionOne,table1 ,table2}   