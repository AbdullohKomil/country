// let elList = document.querySelector('.js-list')

// const renderPosts = (arr, node) => {
//   node.innerHTML = ''
//   arr.forEach(item => {
//     let newItem = document.createElement('li')
//     let newTitle = document.createElement('h4')
//     let newText = document.createElement('p')

//     newTitle.textContent = item.title
//     newText.textContent = item.body;

//     newItem.appendChild(newTitle);
//     newItem.appendChild(newText);
//     node.appendChild(newItem)
//   });
// }

// const getPosts = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json()
//   renderPosts(data,elList)
// }

// getPosts()

// let arr = [3, 9, 20, 15, 10, 25, 45];
// let newArr = [];

// console.log(
//   arr.reduce((acc, num) => {
//     if (num % 3 === 0 && num % 5 === 0) {
//       acc.push('FizzBuzz')
//     }
//     else if (num % 3 === 0) {
//       acc.push('Fizz')
//     }
//     else if (num % 5 === 0) {
//       acc.push("Buzz");
//     } return acc;
//   },[]);
// );

// let count = 0
// var startInterval = setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000)
// var stopInterval = setTimeout(() => {
//   clearInterval(startInterval)
// }, 5000);

// =====================================================================================UY ISHI=========================================================================

let elBox = document.querySelector('.js-box');
let elTemplate = document.querySelector('.template').content;

function renderCountries(arr, node) {
  node.innerHTML = '';
  arr.forEach((el) => {
    let elCard = elTemplate.cloneNode(true);
    let elImg = elCard.querySelector('.card-img-top');
    let elTitle = elCard.querySelector('.card-title');
    let elPopular = elCard.querySelector('.popular');
    let elCapital = elCard.querySelector('.capital');
    let elRegion = elCard.querySelector('.region');

    elImg.src = el.flags.svg;
    elTitle.textContent = el.name.common;
    elPopular.textContent = 'Population:' + el.population;
    elCapital.textContent = 'Capital:' + el.capital;
    elRegion.textContent = 'Region:' + el.region;
    elBox.appendChild(elCard);
  });
}

let fetchFunc = async () => {
  let response = await fetch('https://restcountries.com/v3.1/all');
  let data = await response.json();
  renderCountries(data, elBox);
};

fetchFunc();

let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');

let newArr = [];

elForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  newArr = [];
  if (elInput.value != '') {
    fetch(`https://restcountries.com/v3.1/name/${elInput.value.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          renderCountries(data, elBox);
        }
      });
    data.forEach((el) => {
      if (el.name.common.includes(elInput.value.toLowerCase())) {
        newArr.push(el);
      }
    });
    renderCountries(newArr, elBox);
  } else {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => renderCountries(data, elBox));
  }
});

let elSelect = document.querySelector('.js-select');

elSelect.addEventListener('change', () => {
  if (elSelect.value != '') {
    if (elSelect.value == 'All') {
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderCountries(data, elBox);
          }
        });
    }
    if (elSelect.value == 'Africa') {
      fetch('https://restcountries.com/v3.1/region/africa')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderCountries(data, elBox);
          }
        });
    }
    if (elSelect.value == 'America') {
      fetch('https://restcountries.com/v3.1/region/america')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderCountries(data, elBox);
          }
        });
    }
    if (elSelect.value == 'Asia') {
      fetch('https://restcountries.com/v3.1/region/asia')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderCountries(data, elBox);
          }
        });
    } 
    if (elSelect.value == 'Europe') {
      fetch('https://restcountries.com/v3.1/region/europe')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderCountries(data, elBox);
          }
        });
    }
    if (elSelect.value == 'Oceania') {
      fetch('https://restcountries.com/v3.1/region/oceania')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderCountries(data, elBox);
          }
        });
    }
  }
});
