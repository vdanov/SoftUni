function search() {
   let towns = Array.from(document.querySelectorAll('ul li'));

   let searchWord = document.querySelector('#searchText').value;
   let matches = towns
      .map(x => x.textContent)
      .filter(x => x.includes(searchWord));

   Array.from(towns.filter(x => x.textContent.includes(searchWord))
   .map(x => x.style.fontWeight = 'bold'));
   
   Array.from(towns.filter(x => x.textContent.includes(searchWord))
   .map(x => x.style.textDecoration = 'underline'));

   document.getElementById('result').textContent = `${matches.length} matches found`;  
}