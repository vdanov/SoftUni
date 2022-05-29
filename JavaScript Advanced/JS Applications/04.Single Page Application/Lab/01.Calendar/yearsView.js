export function showYears(params) {
    const yearsSection = document.querySelector('#years');
    document.querySelectorAll('section').forEach(x => x.style.display = 'none');
    yearsSection.style.display = 'block';
}