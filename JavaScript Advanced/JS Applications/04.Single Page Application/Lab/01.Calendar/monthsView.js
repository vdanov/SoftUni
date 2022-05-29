
export function monthsView() {
    document.querySelectorAll('td.day').forEach(x => x.addEventListener('click', (ev) => {

        const id = ev.target.innerText;
        
        if (id == '2020' || id == '2021' || id == '2022' || id == '2023') {
            document.querySelectorAll('section').forEach(x => x.style.display = 'none');
            document.querySelector('#year-' + id).style.display = 'block'
        } else {
            document.querySelector('#year-2020').style.display =  'none';
            document.querySelector('#month-2020-1').style.display = 'block'
        }
    }));
}