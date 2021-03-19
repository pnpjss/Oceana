const { doc } = require('prettier');

document.addEventListener('DOMContentLoaded', () => {
  // Intro
  const waves = document.querySelector('#waves');
  const h2Premier = document.querySelector('#h2-premier');
  const h2Date = document.querySelector('#h2-date');

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  if (vw > 1100) {
    waves.style.transform = `scale(2)`;
    waves.style.top = `-0%`;
    h2Premier.style.top = `40%`;
    h2Date.style.top = `45%`;
  } else if (vw < 375) {
    h2Date.style.top = `40.5%`;
    waves.style.transform = `scale(4)`;
    waves.style.top = `5%`;
  } else if (vw >= 375 && vw < 760) {
    waves.style.transform = `scale(4)`;
    waves.style.top = `5%`;
    h2Date.style.top = `41%`;
  } else {
    waves.style.transform = `scale(4)`;
    waves.style.top = `5%`;
    h2Date.style.top = `41%`;
  }

  function showTextContent() {
    h2Premier.style.opacity = `1`;
    h2Date.style.opacity = `1`;
  }
  setTimeout(showTextContent, 1000);

  // Header buttons
  const headerBtns = document.querySelectorAll(
    '.btn-calendar, .btn-cart, .btn-search'
  );
  // Header buttons header hover effect
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
  // Page 3 buttons, amusements, tickets and opening hours
  const page3btns = document.querySelectorAll(
    '.grid-container-section2 .grid-section2 button'
  );

  // Underscores on button hover
  const btnsUnderscores = document.querySelectorAll(
    '.grid-container-section2 .grid-section2 .hover-line'
  );

  // Hover function
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

  // CSV converted JSON data fetch
  const data = require('./invites.json');

  // Personalizing function
  function sortUser() {
    // Fetch visitor id from URL
    const urlParams = new URLSearchParams(window.location.search);
    let userId = parseInt(urlParams.get('id'));

    if (isNaN(userId)) {
      userId = 0;
      const name = document.querySelector('.user-name');
      name.textContent = 'Grattis ' + 'Jane' + ' ' + 'Doe!';
      return userId;
    } else if (userId !== null) {
      // JSON data started counting from 0 therefore id = id - 1
      userId--;
      const name = document.querySelector('.user-name');
      name.textContent =
        'Grattis ' +
        data[userId]['1Fornamn'] +
        ' ' +
        data[userId]['2Efternamn'] +
        '!';

      // Last page email signup
      const subscribeInput = document.querySelector('.input-email');
      subscribeInput.placeholder = data[userId]['8Epost'];

      return userId;
    }
  }

  let userId = sortUser();

  // Form and form background
  const formBg = document.querySelector('.form-bg');
  const form = document.querySelector('.confirm-form');

  //
  let formContent = document.querySelectorAll(
    ' .form-bg h2, .form-bg p, .form-bg .confirm-form, .checkbox-form-group, .form-bg'
  );

  formContent.forEach((item) => {
    console.log(item);
    item.style.opacity = `0`;
    item.style.zIndex = `-1`;
    item.style.transition = `350ms ease-out`;
  });

  // Confirm ticket button
  const confirmBtn = document.querySelector('.confirm-btn');
  confirmBtn.addEventListener('click', () => {
    // Show form content
    let timer = 100;
    formContent.forEach((item) => {
      function showContent() {
        timer = timer + 100;
        function delay() {
          item.style.opacity = `1`;
          item.style.zIndex = `10`;
        }
        setTimeout(delay, timer);
      }

      setTimeout(showContent, timer);
    });

    formBg.style.height = `92vh`;
    formBg.style.opacity = `1`;
    formBg.style.zIndex = `10`;
    // display form and formbg
  });

  // Fetch exit button
  const exitBtn = document.querySelector('.exit-btn');

  // Hide form content
  exitBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    formContent.forEach((item) => {
      function hideContent() {
        item.style.opacity = `0`;
        item.style.zIndex = `-1`;
      }
      setTimeout(hideContent, 100);
    });

    formBg.style.transitionDelay = `250ms`;
    formBg.style.height = `0vh`;
  });
});
