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
      console.log('an item');
      console.log(item);

      function showContent() {
        item.style.opacity = `1`;
        item.style.zIndex = `10`;
      }

      setTimeout(showContent, 250);
    });

    formBg.style.height = `92vh`;
    // display form and formbg
  });

  // the exit button
  const exitBtn = document.querySelector('.exit-btn');
  console.log(exitBtn);
  // the form background

  console.log(exitBtn);
  exitBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log('exit button click');
    formContent.forEach((item) => {
      console.log(item);
      function hideContent() {
        item.style.opacity = `0`;
        item.style.zIndex = `-1`;
      }
      setTimeout(hideContent, 200);
    });
    formBg.style.height = `0vh`;
  });
});
