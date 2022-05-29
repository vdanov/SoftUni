function attachEvents(params) {
    displayData();
    document.querySelector('#form').addEventListener('submit', createStudent);
}
attachEvents();

async function createStudent(e) {
    let inputFields = document.querySelectorAll('input');

    let student = {
        firstName: inputFields[0].value,
        lastName: inputFields[1].value,
        facultyNumber: inputFields[2].value,
        grade: inputFields[3].value
    };

    await postData(student);
    return student;
}

async function displayData() {
    let students = await getData();

    let inputFields = document.querySelector('tbody');

    Object.values(students).map(student => {
        let trElement = document.createElement('tr');
        trElement.innerHTML = `<tr>
<th>${student.firstName}</th>
<th>${student.lastName}</th>
<th>${student.facultyNumber}</th>
<th>${student.grade}</th>
</tr>`
        inputFields.appendChild(trElement);
    });
}

async function getData(params) {
    const res = await fetch('http://localhost:3030/jsonstore/collections/students');
    return res.json();
}

async function postData(data) {

    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        facultyNumber: data.facultyNumber,
        grade: data.grade
    };

    const options = {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
    };

    const resp = fetch('http://localhost:3030/jsonstore/collections/students', options);
    return resp.json();
}

function deleteData(id) {
    fetch('http://localhost:3030/jsonstore/collections/students/' + id, { method: 'delete' });
}