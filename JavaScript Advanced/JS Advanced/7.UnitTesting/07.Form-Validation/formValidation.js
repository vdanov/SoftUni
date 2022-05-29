function validate() {
    let usernamePattern = /^[a-zA-Z0-9]{3,20}$/gm;
    let passwordPattern = /^[\w]{5,15}$/gm;
    let emailPattern = /^\w+@\w+\.\w+$/gm;
    let companyNumberPattern = /^[0-9]{4}$/gm;

    let inputFields = document.querySelectorAll('input[type="text"], input[type="password"]');

    document.querySelector('#company').addEventListener('click', (e) => {
        if (e.target.checked) {
            document.querySelector('#companyInfo').style.display = 'block';
        } else {
            document.querySelector('#companyInfo').style.display = 'none';
        }
    })

    document.querySelector('#submit').addEventListener('click', (e) => {

        e.preventDefault();

        inputFields.forEach(field => {

            switch (field.id) {
                case "username":
                    if (!usernamePattern.test(field.value)) {
                        field.style.borderColor = 'red';
                        console.log(field.style.borderColor.up);
                    }
                    break;
                case "password":
                    if (!passwordPattern.test(field.value)) {
                        field.style.borderColor = 'red';
                    } field.style.borderColor = 'none';
                    break;
                case "confirm-password":
                    if (field.value != document.querySelector('#password').value) {
                        field.style.borderColor = 'red';
                        document.querySelector('#password').style.borderColor = 'red';
                    }
                    break;
                case "email":
                    if (!emailPattern.test(field.value)) {
                        field.style.borderColor = 'red';
                    }
                    break;
            }
        })

        if (document.querySelector('#company').checked) {
            if (!companyNumberPattern.test(document.querySelector('#companyNumber').value)) {
                document.querySelector('#companyNumber').style.borderColor = 'red';
            } else {
                document.querySelector('#companyInfo').style.borderColor = 'none';
            }
        }
        let valid = true;

        for (const field of inputFields) {
            if (field.style.borderColor == 'red') {
                valid = false;
            }
        }

        if (document.querySelector('#companyNumber').style.borderColor == 'red') {
            valid = false;
        }

        if (valid) {
            document.querySelector('#valid').style.display = 'block';
        }
    })
}