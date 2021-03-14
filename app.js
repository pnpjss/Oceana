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
      if (underscore.id === btn.id) {
        underscore.style.width = '6rem';
      }
    });
  });
  btn.addEventListener('mouseout', () => {
    btnsUnderscores.forEach((underscore) => {
      if (underscore.id === btn.id) {
        underscore.style.width = '0rem';
      }
    });
  });
});

const { doc } = require('prettier');
const data = require('./invites.json');
function sortUser() {
  const urlParams = new URLSearchParams(window.location.search);
  let userId = urlParams.get('id');
  userId--;
  const name = document.querySelector('.user-name');
  name.textContent =
    'Grattis ' + data[userId]['1Fornamn'] + ' ' + data[userId]['2Efternamn'];
  return userId;
}

let userId = sortUser();

const confirmBtn = document.querySelector('.confirm-btn');
confirmBtn.addEventListener('click', () => {
  let page2 = document.querySelector('.grid-container-section1 .item2');
  let form = document.createElement('form');

  let formFirstNameInput = document.createElement('input');
  let formFirstNameLabel = document.createElement('label');
  formFirstNameInput.setAttribute('class', 'input-firstname');
  formFirstNameInput.placeholder = data[userId]['1Fornamn'];
  formFirstNameInput.setAttribute('type', 'text');
  formFirstNameLabel.setAttribute('for', 'input-firstname');
  formFirstNameLabel.textContent = `first name`;

  let formLastNameInput = document.createElement('input');
  let formLastNameLabel = document.createElement('label');
  formLastNameInput.placeholder = data[userId]['2Efternamn'];
  formLastNameInput.setAttribute('class', 'input-lastname');
  formLastNameInput.setAttribute('type', 'text');
  formLastNameLabel.setAttribute('for', 'input-lastname');
  formLastNameLabel.textContent = `last name`;

  let formEmailInput = document.createElement('input');
  let formEmailLabel = document.createElement('label');
  formEmailInput.setAttribute('class', 'input-email');
  formEmailInput.setAttribute('type', 'text');
  formEmailLabel.setAttribute('for', 'input-email');
  formEmailLabel.textContent = `email`;

  form.append(formFirstNameLabel);
  form.append(formFirstNameInput);
  form.append(formLastNameLabel);
  form.append(formLastNameInput);
  form.append(formEmailLabel);
  form.append(formEmailInput);
  console.log(form);

  page2.append(form);
  function formStyles() {
    form.classList.add('confirm-form');
    form.style.transition = `200ms ease-out`;
    form.style.height = `100vh`;
    form.style.opacity = `1`;
  }

  setTimeout(formStyles, 1);
});
