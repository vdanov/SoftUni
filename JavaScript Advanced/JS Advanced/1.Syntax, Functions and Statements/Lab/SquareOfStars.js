function solve(n = 5) {
    let rectangle = '';
    for (let index = 0; index < n; index++) {        
        for (let i = 0; i < n; i++) {
            rectangle += '* ';
        }
        rectangle += "\n";
    }   
    console.log(rectangle);
}
solve(3);