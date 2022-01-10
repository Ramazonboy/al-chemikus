
const body = document.querySelector('body');

const randNum = (num) => {
    return Math.floor(Math.random() * num)
}

var word

const jadvalYarat = () => {
    const container = document.createElement('div');
    container.className = "container p-3 ";
    const row = document.createElement('div');
    row.className = "row p-2";
    const row1 = document.createElement('div');
    row1.className = "row p-2";
    const col6 = document.createElement('div');
    col6.className = "col-6 offset-3 p-2 text-center";
    const h1 = document.createElement("h1")
    const p1 = document.createElement("h4")
    const rand = randNum(2)
    p1.innerHTML = element[rand].nomi
    row1.append(col6)
    const del = document.createElement("button")
    del.className = 'btn btn-primary d-none'
    const ok = document.createElement("button")
    ok.className = 'btn btn-primary d-none'
    ok.addEventListener("click", () => {
        showFormula()
        if (h1.innerHTML === element[rand].formulasi)
            console.log('true');
        else
            console.log('false');
        body.innerHTML = ""
        jadvalYarat()
    })
    del.innerHTML = `<i class="fas fa-backspace    "></i>`
    ok.innerHTML = `<i class="fas fa-check    "></i>`
    del.addEventListener('click', () => {
        let a = h1.innerHTML;
        a1 = a[a.length - 1];
        if (a1 != a1.toUpperCase())
            h1.innerHTML = a.substring(0, a.length - 2)
        else {
            h1.innerHTML = a.substring(0, a.length - 1)
        }
        if (h1.innerHTML === '') {
            del.classList.add('d-none')
            ok.classList.add('d-none')
        }

        console.log(a[a.length - 1]);

    })
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
            changeElement(item.kimyoviyBelgisi)
            count += 1;
            //button.innerHTML = "Click me: " + count;
            if (col.classList.contains('black') || col.classList.contains('white')) return
            if (del.classList.contains('d-none')) {
                ok.classList.remove('d-none')
                del.classList.remove('d-none')
            }
            if (count === 1)
                h1.innerHTML += item.kimyoviyBelgisi
            else if (count === 2)
                h1.innerHTML += count
            else {
                //const sub = document.createElement('sub')
                let c = h1.innerHTML
                console.log(typeof c[c.length - 1]);
                if (c[c.length - 1] >= 0 && c[c.length - 1] <= 9)
                    h1.innerHTML = c.substring(0, c.length - 1)
                h1.innerHTML += count
                //h1.append(sub)
            }
            //h1.innerHTML = showFormula()
        })
        col6.append(p1, h1, del, ok)
        col.append(p, h3)
        row.append(col)
    })

    container.append(row1, row)
    body.append(container)
}
jadvalYarat()
