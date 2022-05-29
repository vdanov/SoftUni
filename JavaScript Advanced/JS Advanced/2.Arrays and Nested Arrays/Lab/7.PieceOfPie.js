function solve(pies, flavourOne, flavourTwo) {
    let indexFO = pies.indexOf(flavourOne);
    let indexFT = pies.indexOf(flavourTwo);

    let result = pies.slice(indexFO, indexFT+1);
    return result;
}