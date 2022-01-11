let formula = {}

const changeElement = (element) => {
    if (formula[element]) {
        formula[element].push(element)
    }
    else {
        formula[element] = [element]
    }
    //console.log(formula[element]);

}

const delFormula = (e) => {
    Object.entries(formula).map((entry) => {
        if (e == entry[0])
            console.log('ishldi');
    }

    )
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