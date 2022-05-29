function solve(input) {
    let result = [];
    let i = 1;
    for (let index = 0; index < input.length; index++) {
        switch (input[index]) {
            case 'add':
                result.push(i);
                break;
            case 'remove':
                result.pop();
                break;
            default:
                break;
        }
        i++;
    }
    if (result.length > 0) {
        result.forEach(x => console.log(x));
    } else {
        console.log('Empty');
    }
}
solve(['add', 
'add', 
'remove', 
'add', 
'add']);