function solve() {
  let input = document.querySelector('#exercise textarea');
  let buttons = document.querySelectorAll('#exercise button');

  let generateButton = buttons[0].textContent == 'Generate' ? buttons[0] : buttons[1];
  let buyButton = buttons[0].textContent == 'Buy' ? buttons[0] : buttons[1];

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function buy(event) {
    let itemsBought = [];

    Array.from(document.querySelectorAll('tbody input'))
      .filter(box => box.checked == true)
      .forEach(box => itemsBought.push(box.parentNode.parentNode));

    if (itemsBought.length > 0) {
      let nameOfBoughtItems = [];
      let totalPrice = 0;
      let totaldecFactor = 0;

      for (const item of itemsBought) {
        let name = item.children[1].children[0].textContent;
        let price = Number(item.children[2].children[0].textContent);
        let decFactor = Number(item.children[3].children[0].textContent);

        totaldecFactor += decFactor;
        totalPrice += price;

        nameOfBoughtItems.push(name);
      }

      totaldecFactor /= nameOfBoughtItems.length;

      let output = `Bought furniture: ${nameOfBoughtItems.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totaldecFactor}`;

      let textarea = document.querySelectorAll('textarea');
      textarea[1].value = output;
    }
  }

  function generate(event) {
    
    if (input.value.length > 0) {
      let converted = JSON.parse(input.value);

      for (const items of converted) {

        let newItem = {
          name: items.name,
          img: items.img,
          price: items.price,
          decFactor: items.decFactor
        };

        let trElement = document.createElement('tr');
        let tdImage = document.createElement('td');
        let tdName = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tddecFactor = document.createElement('td');
        let tdChekbox = document.createElement('td');

        let imgElement = document.createElement('img');
        let nameElement = document.createElement('p');
        let priceElement = document.createElement('p');
        let decFactorElement = document.createElement('p');
        let checkbox = document.createElement('input');

        imgElement.setAttribute('src', newItem.img);
        nameElement.textContent = newItem.name;
        priceElement.textContent = newItem.price;
        decFactorElement.textContent = newItem.decFactor;
        checkbox.setAttribute('type', 'checkbox');

        tdImage.appendChild(imgElement);
        tdName.appendChild(nameElement);
        tdPrice.appendChild(priceElement);
        tddecFactor.appendChild(decFactorElement);
        tdChekbox.appendChild(checkbox);

        trElement.appendChild(tdImage);
        trElement.appendChild(tdName);
        trElement.appendChild(tdPrice);
        trElement.appendChild(tddecFactor);
        trElement.appendChild(tdChekbox);

        let table = document.querySelector('.table tbody');
        table.appendChild(trElement);
      }
    }
  }



  /* [{"name": "Sofa",
  "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
  "price": 150, "decFactor": 1.2},
   {"name": "Tablet",
   "img": "https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg",
    "price": 2000, "decFactor": 5.2},
     {"name": "Vase", "img": "https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg",
    "price": 15, "decFactor": 10}] */

}