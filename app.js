const { doc } = require('prettier');

document.addEventListener('DOMContentLoaded', () => {
  const page3btns = document.querySelectorAll(
    '.grid-container-section2 .grid-section2 button'
  );

  const btnsUnderscores = document.querySelectorAll(
    '.grid-container-section2 .grid-section2 .hover-line'
  );
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

  const data = require('./invites.json');

  function sortUser() {
    const urlParams = new URLSearchParams(window.location.search);
    let userId = parseInt(urlParams.get('id'));

    if (isNaN(userId)) {
      userId = 0;
      const name = document.querySelector('.user-name');
      name.textContent = 'Grattis ' + 'Jane' + ' ' + 'Doe!';
      return userId;
    } else if (userId !== null) {
      userId--;
      const name = document.querySelector('.user-name');
      const subscribeInput = document.querySelector('.input-email');
      name.textContent =
        'Grattis ' +
        data[userId]['1Fornamn'] +
        ' ' +
        data[userId]['2Efternamn'] +
        '!';

      subscribeInput.placeholder = data[userId]['8Epost'];

      return userId;
    }
  }

  const headerBtns = document.querySelectorAll(
    '.btn-calendar, .btn-cart, .btn-search'
  );
  headerBtns.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.transform = `scale(1.4)`;
    });
  });
  headerBtns.forEach((item) => {
    item.addEventListener('mouseout', () => {
      item.style.transform = `scale(1)`;
    });
  });

  let userId = sortUser();

  // fetch the form background and form
  const formBg = document.querySelector('.form-bg');
  const form = document.querySelector('.confirm-form');

  let formContent = document.querySelectorAll(
    '.form-bg, .form-bg h2, .form-bg p, .form-bg .confirm-form'
  );
  console.log(formContent);
  formContent.forEach((item) => {
    console.log(item);
    item.style.opacity = `0`;
    item.style.zIndex = `-1`;
  });

  // create button for confirming ticket
  const confirmBtn = document.querySelector('.confirm-btn');
  confirmBtn.addEventListener('click', () => {
    // add functions
    console.log('button clicked');
    formContent.forEach((item) => {
      console.log(item);
      item.style.opacity = `1`;
      item.style.zIndex = `10`;
    });

    // display form and formbg
    formBg.style.height = `92vh`;
  });

  // the exit button
  const exitBtn = document.querySelector('.exit-btn');
  console.log(exitBtn);
  // the form background

  console.log(exitBtn);
  exitBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    formBg.style.height = `0vh`;
    console.log('exit button click');
    formContent.forEach((item) => {
      console.log(item);
      item.style.opacity = `0`;
      item.style.zIndex = `-1`;
    });
  });
});

// const confirmBtn = document.querySelector('.confirm-btn');
// confirmBtn.addEventListener('click', () => {
//   let page2 = document.querySelector('.grid-container-section1 .item2');
//   // create form and form items
//   let form = document.createElement('form');
//   // exit button
//   let exitBtn = document.createElement('button');
//   exitBtn.setAttribute('class', 'exit-btn');
//   exitBtn.setAttribute('type', 'submit');

//   exitBtn.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     form.remove();
//   });

//   page2.append(form);
//   function formStyles() {
//     form.classList.add('confirm-form');
//     form.style.transition = `200ms ease-out`;
//     form.style.height = `100vh`;
//     form.style.opacity = `1`;
//     form.style.zIndex = `5`;
//   }
//   setTimeout(formStyles, 1);
// // exit button animation
// let exitBtnObject = document.createElement('object');

// exitBtnObject.setAttribute('id', 'exit-object');
// exitBtnObject.setAttribute('type', 'image/svg+xml');
// exitBtnObject.setAttribute('data', '/images/exit_btn.svg');

// // firstname input and label
// let firstNameInput = document.createElement('input');
// let firstNameLabel = document.createElement('label');
// firstNameInput.setAttribute('class', 'input-firstname');
// firstNameInput.placeholder = data[userId]['1Fornamn'];
// firstNameInput.setAttribute('type', 'text');
// firstNameLabel.setAttribute('for', 'input-firstname');
// firstNameLabel.textContent = `first name`;

// //lastname input and label
// let lastNameInput = document.createElement('input');
// let lastNameLabel = document.createElement('label');
// lastNameInput.placeholder = data[userId]['2Efternamn'];
// lastNameInput.setAttribute('class', 'input-lastname');
// lastNameInput.setAttribute('type', 'text');
// lastNameLabel.setAttribute('for', 'input-lastname');
// lastNameLabel.textContent = `last name`;

// //email input and label
// let emailInput = document.createElement('input');
// let emailLabel = document.createElement('label');
// emailInput.setAttribute('class', 'input-email');
// emailInput.setAttribute('type', 'text');
// emailLabel.setAttribute('for', 'input-email');
// emailLabel.textContent = `email`;

// // submit button
// let submitBtn = document.createElement('button');
// submitBtn.textContent = `Submit`;
// submitBtn.setAttribute('type', 'submit');
// submitBtn.setAttribute('class', 'submit-btn');

// // append all items
// form.append(exitBtn);
// form.append(exitBtnObject);
// form.append(firstNameLabel);
// form.append(firstNameInput);
// form.append(lastNameLabel);
// form.append(lastNameInput);
// form.append(emailLabel);
// form.append(emailInput);
// form.append(submitBtn);

// // append the svg object
// // needs to run by timeout or else content document is not yet loaded
// function appendStuff() {
//   let object = document.querySelector('.confirm-form');
//   console.log(object);
//   console.log('exit-objectet efter att det appendats'); // nej
//   let contentDocument = object.contentDocument;
//   console.log(contentDocument);
//   let objectSvg = contentDocument.getElementById('evzbzzngym61');
//   console.log(objectSvg);
//   // let exitBtnSvg = contentDocument.querySelector('#evzbzzngym61');
// }
// setTimeout(appendStuff, 1000);

// });
