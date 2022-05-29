function solve (arr) {
    let max = Number.NEGATIVE_INFINITY;

    let outputArr = arr.reduce((acc, element) => {
        if (element >= max) {
            max = element;
            acc.push(element);
        }

        return acc;
    }, []);

    return outputArr;
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)