function solve(array) {
    let adding = (acc, word) => {
        acc+1;
        return `${acc}.${word}`;
    };

    array.sort((a,b) => a.localeCompare(b)).
    map((element,num ) => adding(num + 1, element)).
    map(x=>console.log(x));
}
solve(["John", "Bob", "Christina", "Ema"]);