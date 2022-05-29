function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  text = text.toLowerCase();

  switch (convention) {
    case 'Pascal Case':
      text = text.split(' ').map(x => x.replace(x[0], x[0].toUpperCase())).join('');
      break;
    case 'Camel Case':
      text = text.split(' ').map(x => x.replace(x[0], x[0].toUpperCase())).join('');
      text = text.replace(text[0], text[0].toLowerCase());
      break;
    default:
      text = 'Error!'
      break;
  }

  document.getElementById('result').textContent = text;
}