import { signOutFB,getJadval } from "./firebase.js";
//import {  showFormula, kimyoviyFormulaYozish } from "./formula.js"
import { jadvalYarat, scoreNumber } from "./game.js";
import { signUp } from "./reg.js";

//let chance = 5;
//let scoreNumber = 0
const body = document.querySelector('body')

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

var word
const sectionOne = () => {
    
    const sect1 = createElement('section', '', 'container-fluid ', body)
    const sectOneDiv = createElement('div', '', 'row sectOne justify-content-center align-items-center', sect1)
    const colLeft = createElement('div', '', 'col-md-4', sectOneDiv)
    const colLeftH1 = createElement('h1', `<span class="text-danger"> al-ChemikuS </span>bilan muvaffiqiyatga erishing`, 'text-center', colLeft)
    const colRight = createElement('div', '', 'col-md-8', sectOneDiv)
    const colRightImg = createElement('img', '', 'w-100 ', colRight);
    colRightImg.src = "./image/probirka.gif"
}
const headerRender = () => {
    body.innerHTML = ''
    const header = createElement('header', '', 'sticky-top', body);
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
    body.innerHTML = "";
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
    body.append(div)

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

    const table = createElement('table', "", "table table-striped bg-white ", body);
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
export { signUp, body, headerRender, randNum, createElement, refresh, sectionOne}   