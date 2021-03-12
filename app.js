const page3btns = document.querySelectorAll(
  '.grid-container-section2 .grid-section2 button'
);
console.log(page3btns);
const btnsUnderscores = document.querySelectorAll(
  '.grid-container-section2 .grid-section2 .hover-line'
);
console.log(btnsUnderscores);
page3btns.forEach((btn) => {
  btn.addEventListener('mouseover', () => {
    btnsUnderscores.forEach((underscore) => {
      console.log(underscore);
      if (underscore.id === btn.id) {
        underscore.style.width = '6rem';
      }
    });
  });
  btn.addEventListener('mouseout', () => {
    btnsUnderscores.forEach((underscore) => {
      console.log(underscore);
      if (underscore.id === btn.id) {
        underscore.style.width = '0rem';
      }
    });
  });
});

// const data = require('./invites.json');
// console.log(data[1]['1Fornamn']);
// const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.has('id')); // true
// let userId = urlParams.get('id');
// console.log(userId);

// console.log(data[userId]['1Fornamn']);

// const name = document.querySelector('.user-name');
// console.log(name);

// name.textContent =
//   'Grattis ' + data[userId]['1Fornamn'] + ' ' + data[userId]['2Efternamn'];

const data = require('./invites.json');
function sortUser() {
  const urlParams = new URLSearchParams(window.location.search);
  let userId = urlParams.get('id');
  userId--;
  const name = document.querySelector('.user-name');
  name.textContent =
    'Grattis ' + data[userId]['1Fornamn'] + ' ' + data[userId]['2Efternamn'];
}

sortUser();
