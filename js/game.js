import { elementI } from "./element.js";
import { getJadval } from "./firebase.js";
import { changeElement, kimyoviyFormulaYozish, showFormula } from "./formula.js";
import { body, createElement, headerRender, randNum, refresh, sectionOne} from "./function.js";
var scoreNumber1 = 0;
let formula = {}
var scoreNumber
var chance1 = 3
const jadvalYarat = (data) => {
    headerRender()
    sectionOne()
    const container = document.createElement('div');
    container.className = "container-fluid p-3 py-5 ";
    container.style.background="#554552"
    const row = document.createElement('div');
    row.className = "row p-2";
    container.style.height='95vh'
    row.style.maxHeight='60vh'
    row.style.overflow='auto'
    const row1 = document.createElement('div');
    row1.className = "row p-2";
    const col3Left = document.createElement('div')
    const col3Right = document.createElement('div')
    const h1Left = document.createElement("h1")
    h1Left.innerHTML = `Your Score : ${scoreNumber1}`;
    col3Left.append(h1Left)
    const col6 = document.createElement('div');

    col6.className = "col-6  p-2 text-center";
    col3Left.className = "col-3  p-2 text-center text-white";
    col3Right.className = "col-3  p-2 text-center text-white";

    const h1 = document.createElement("h1")
    const p1 = document.createElement("h4")
    const rand = randNum(elementI.length - 1)
    p1.innerHTML = elementI[rand].nomi
    p1.classList.add('text-white')
    h1.classList.add('text-light')
    console.log(elementI[rand].formulasi);
    h1.style.minHeight = '50px'
    const col3Righth1 = document.createElement("h1")
    col3Righth1.innerHTML = `Chance: ${chance1}`
    col3Right.append(col3Righth1)
    row1.append(col3Left, col6, col3Right)
    const ok = document.createElement("button")
    ok.className = 'btn  btn-primary';
    ok.addEventListener("click", () => {
        h1.innerHTML = showFormula()
        if (h1.innerHTML === elementI[rand].formulasi) {
            scoreNumber1++
            formula = {}
            const trueDiv=createElement('div','','refresh',body)
            getJadval(jadvalYarat);
        }
        else {
            chance1--
            if (chance1 == 0) {
                chance1 = 3
                scoreNumber = scoreNumber1;
                scoreNumber1 = 0
                formula = {}

                //body.innerHTML = ''
                refresh()
            }
            else {
                formula = {}
                getJadval(jadvalYarat);
            }

        }

    })
    ok.innerHTML = '<i class="fas fa-check" ></i > ';




    Object.entries(data).map((index) => {
        let item = index[1];
        const col = document.createElement("div")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        p.className = 'm-0 p-0'
        h1.className = 'm-0 p-0'
        p.innerHTML = item.name
        h3.innerHTML = item.belgisi
        col.className = `col-1 text-center   d-flex flex-column align-items-center justify-content-center ${item.clas}`
        let count = 0
        col.addEventListener("click", () => {
            //button.innerHTML = "Click me: " + count;
            if (col.classList.contains('black') || col.classList.contains('white')) return
            changeElement(item.belgisi)
            count += 1;
            if (ok.classList.contains("d-none")) {
                ok.classList.remove('d-none')
            }
            h1.innerHTML = ""
            let word = showFormula()
            h1.className='text-light'
            h1.innerHTML = kimyoviyFormulaYozish(word)
        })
        col6.append(p1, h1, ok)
        col.append(p, h3)
        row.append(col)
    })

    container.append(row1, row)
    body.append(container)
}

export { formula, jadvalYarat, scoreNumber, chance1 }