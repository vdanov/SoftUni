function solve(array) {
    let comparer = function (a,b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length){
            return -1;
        } else{
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1
            } else if (a.toLowerCase() < b.toLowerCase()){
                return -1;
            } else {
                return 0;
            }
        }
        
    };

    array.sort((a,b) => comparer(a,b))
    .forEach(x=>console.log(x));
}
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);
