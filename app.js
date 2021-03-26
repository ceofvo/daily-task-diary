const form = document.querySelector('.form-format');
const ul = document.querySelector('ul');
const button = document.querySelector('#clear-data');
const input = document.querySelector('#text');

let itemsArray;

if (localStorage.getItem('items')) {
  itemsArray = JSON.parse(localStorage.getItem('items'))
} else {
  itemsArray = []
}

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));



const listMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  listMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  listMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});