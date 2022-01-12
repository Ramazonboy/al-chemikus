const body = document.querySelector('body');
let scoreNumber = 0;
let chance = 5;

const randNum = (num) => {
    return Math.floor(Math.random() * num)
}
//console.log(element.length - 1);
var word

const jadvalYarat = () => {
    body.innerHTML = ''
    const container = document.createElement('div');
    container.className = "container p-3 ";
    const row = document.createElement('div');
    row.className = "row p-2";
    const row1 = document.createElement('div');
    row1.className = "row p-2";
    const col3Left = document.createElement('div')
    const col3Right = document.createElement('div')
    const h1Left = document.createElement("h1")
    h1Left.innerHTML = `Your Score : ${scoreNumber}`;
    col3Left.append(h1Left)
    const col6 = document.createElement('div');

    col6.className = "col-6  p-2 text-center";
    col3Left.className = "col-3  p-2 text-center";
    col3Right.className = "col-3  p-2 text-center";

    const h1 = document.createElement("h1")
    const p1 = document.createElement("h4")
    const rand = randNum(element.length - 1)
    console.log(rand);
    p1.innerHTML = element[rand].nomi
    console.log(element[rand].formulasi);
    h1.style.minHeight = '40px'
    const col3Righth1 = document.createElement("h1")
    col3Righth1.innerHTML = `Chance: ${chance}`
    col3Right.append(col3Righth1)
    row1.append(col3Left, col6, col3Right)
    const ok = document.createElement("button")
    ok.className = 'btn btn-primary';
    ok.addEventListener("click", () => {
        h1.innerHTML = showFormula()
        if (h1.innerHTML === element[rand].formulasi) {
            scoreNumber++
            console.log(scoreNumber, chance);
            formula = {}
            jadvalYarat();
        }
        else {
            chance--
            console.log(scoreNumber, chance);
            if (chance == 0) {
                //body.innerHTML = ''
                refresh()
            }
            else {
                formula = {}
                jadvalYarat()
            }

        }

    })
    ok.innerHTML = `<i class="fas fa-check    "></i>`
    davriyJadval.map((item) => {
        const col = document.createElement("div")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        p.className = 'm-0 p-0'
        h1.className = 'm-0 p-0'
        p.innerHTML = item.nomi;
        h3.innerHTML = item.kimyoviyBelgisi
        col.className = `col-1 text-center   d-flex flex-column align-items-center justify-content-center ${item.class}`
        let count = 0
        col.addEventListener("click", () => {
            //button.innerHTML = "Click me: " + count;
            if (col.classList.contains('black') || col.classList.contains('white')) return
            changeElement(item.kimyoviyBelgisi)
            count += 1;
            if (ok.classList.contains("d-none")) {
                ok.classList.remove('d-none')
            }
            h1.innerHTML = ""
            let text = ''
            let word = showFormula()
            for (const letter of word) {
                if (letter >= 0 && letter <= 9) {
                    text += `<sub>${letter}</sub>`
                }
                else text += letter
            }
            //console.log(text);
            h1.innerHTML = text
        })
        col6.append(p1, h1, ok)
        col.append(p, h3)
        row.append(col)
    })

    container.append(row1, row)
    body.append(container)
}
body.onload = jadvalYarat()
const refresh = () => {
    body.innerHTML = "";
    const div = document.createElement("div")
    div.className = 'refresh'
    const aa = document.createElement('h1')
    aa.innerHTML = `Your Score : ${scoreNumber}`
    const btn = document.createElement('button')
    btn.className = "btn btn-primary"
    btn.innerHTML = ` <i class="fas fa-redo    "></i>`;
    btn.addEventListener('click', () => {
        chance = 5;
        scoreNumber = 0
        jadvalYarat();
    })
    div.append(aa, btn)
    body.append(div)
}
