function solve() {
    let array = [5, 2, 4, 1, 3];

    for (i = 0; i < array.length; i++) {
        for (let index = i; index < array.length; index++) {
            if (array[i] > array[index]) {
                let temp = array[index];
                array[index] = array[i];
                array[i] = temp;
            }

        }
    }

    let test = [{
        id: 5,
        collection: [{
            cirteria: 1

        }]
    }]
    console.log(test.filter(t => t.id == 5).collection);
    //test.filter(t => t.id == 5).collection.push({ injected: 'success' })
    console.log(test);
}
solve();