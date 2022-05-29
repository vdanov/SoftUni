function solve(input){
    let regex = /[^a-zA-Z0-9_]+/;
    let trimEmpty = (obj) => obj === '' ? false : true;
    let text = input.split(regex).filter(trimEmpty);
    let result = '';
    for (let index = 0; index < text.length; index++) {
        result += text[index].toUpperCase() + ', ';
    }
    result = result.substring(0, result.length-2);
    console.log(result);
}