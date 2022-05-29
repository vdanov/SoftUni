function create(words) {

   for (const text of words) {
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = text;
      para.style.display = 'none';
      div.appendChild(para);
      div.addEventListener('click', changeDisplayStyle);
      document.querySelector('#content').appendChild(div);
   }

   function changeDisplayStyle(e) {
      e.target.children[0].style.display = 'block';
   };
   // 1.For each string, create a div with a paragraph with the string in it
   // 2.Each paragraph is initially hidden (display:none). 
   // 3.Add a click event listener to each div that displays the hidden paragraph.
   // 4.Finally, you should append all divs to the element with an id "content".
}