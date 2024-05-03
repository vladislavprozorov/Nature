/// HAMBURGER
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})
/// SWIPER
let swiper = new Swiper(".flowers__content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".flowers__pagination",
    type: "fraction",
  },
  navigation: {
        nextEl: ".flowers__link_next",
        prevEl: ".flowers__link_prev"
      },
  breakpoints: {
    640: {
      slidesPerView: 1,
      
    },
    968: {
      slidesPerView: 1,
      
    },
    1024: {
      slidesPerView: 4,
      
    },
  },
});
/// ICONS
const search = document.querySelector('.search');
search.onclick = function(){
  search.classList.toggle('search_active');
}