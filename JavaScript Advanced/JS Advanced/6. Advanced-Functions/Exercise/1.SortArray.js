function solve(array, sort) {
    function ascending() {
       return this.sort((a, b) => a - b);
    };

    function descending() {
       return this.sort((a, b) => b - a);
    };

    switch (sort) {
        case 'asc':
            return ascending.call(array);

        case 'desc':
            return descending.call(array);
    }
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));