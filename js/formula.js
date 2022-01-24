import { formula } from "./game.js"

//const formula1 = (res) => { return res }

const changeElement = (element) => {
    if (formula[element]) {
        formula[element].push(element)
    }
    else {
        formula[element] = [element]
    }
    //console.log(formula[element]);

}

const kimyoviyFormulaYozish = (word) => {
    let text = ''
    for (const letter of word) {
        if (letter >= 0 && letter <= 9) {
            text += `<sub>${letter}</sub>`
        }
        else text += letter
    }
    return text
}
const showFormula = () => {
    let word = ''
    Object.entries(formula).map((entry) => {
        if (entry[1].length == 1) {
            word += entry[0]

        }
        else
            word += entry[0] + entry[1].length
    })
    //console.log(formula);
    return word;
}

export { changeElement, showFormula, kimyoviyFormulaYozish }