function solve() {
  let textInput = document.querySelector('#input');

  function countOccurences(text, match) {
    let count = 0;
    for (let index = 0; index < text.length; index++) {
      const element = text[index];

      if (element == match) {
        count++;
      }
    }

    if (count % 2 != 0) {
      count++;
    }
    return count;
  }

  let numberOfSentances = countOccurences(textInput.value, '.');
  let sentances = textInput.value.split('.');

  let child;
  let divOutput;

  let paragraphContent = '';
  let count = 1
  for (let index = 0; index < numberOfSentances; index++) {

    if (sentances[index].length > 1) {
      paragraphContent += (sentances[index] + '.');
    }

    if (count == 3) {
      child = document.createElement('p');
      divOutput = document.querySelector('#output');
      child.textContent = paragraphContent;
      divOutput.appendChild(child);
      count = 0;
      paragraphContent = '';
    }

    count++;
  }

  if (paragraphContent != '') {
    child = document.createElement('p');
    divOutput = document.querySelector('#output');
    child.textContent = paragraphContent;
    divOutput.appendChild(child);
  }
}