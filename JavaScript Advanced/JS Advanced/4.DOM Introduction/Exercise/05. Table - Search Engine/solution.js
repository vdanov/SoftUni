function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchWord = document.getElementById('searchField').value;
      let tableContainer = Array.from(document.querySelectorAll('tbody tr'));

      tableContainer.map(x => x.classList.remove('select'));
      document.querySelector('#searchField').value = '';

      tableContainer.filter(x=> x.textContent.includes(searchWord) && searchWord !== '')
      .map(x=> x.classList.add('select'));
   }
}