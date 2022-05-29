function extract(content) {
    let cont = document.getElementById('content').textContent;

    let word = '';
    let array = [];
    let count = 0;

    for (let index = 0; index < cont.length; index++) {
        if (cont[index] == '(') {

            for (let j = index + 1; j < cont.length; j++) {

                if (cont[j] == ')') {
                    array[count] = word;
                    count++;
                    break;
                }
                word += cont[j];
            }
            
            word = '';
        }
    }
    let result = array.join('; ')
    return result;
}