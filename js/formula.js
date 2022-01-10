const formula = {}

const changeElement = (element) => {
    if (formula[element]) {
        formula[element].push(element)
    }
    else {
        formula[element] = [element]
    }
    //console.log(formula[element]);

}

const showFormula = () => {
    let word = ''
    // for (key in formula) {
    //     console.log(key.length);

    //     // word += key + key.length
    // }
    // console.log(formula);
    for (const iterator of object) {
        console.log(iterator);
    }
    //return word;
}