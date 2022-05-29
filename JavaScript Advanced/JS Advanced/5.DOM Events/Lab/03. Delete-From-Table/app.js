function deleteByEmail() {
    let email = document.querySelector('label > input').value;

    let listOfEmails = document.querySelectorAll('td:nth-of-type(2n)');

    for (mail of listOfEmails) {

        if (mail.textContent == email) {

            let row = mail.parentNode;

            row.parentNode.removeChild(row);
            document.querySelector('#result').textContent = 'Deleted';
            return;
        }
    }

    document.querySelector('#result').textContent = 'Not found.';
}