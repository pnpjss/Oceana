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

// let header = $('header');
// let height = $(window).height();
// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll >= height) {
//     console.log('youve scrolled on');
//     header.addClass('header-fixed');
//   } else {
//     header.removeClass('header-fixed');
//   }
// });
