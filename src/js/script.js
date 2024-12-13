
const menuIcon = document.querySelector('.menu-icon');
const menuToggle = document.querySelector('.menu-toggle');
const searchToggle = document.querySelector('.search-toggle');
const menu = document.querySelector('.menu');
const searchIcon = document.querySelector('.search-icon');

console.log(menuIcon, menuToggle, menu);


menuIcon.addEventListener('click', () => {
    console.log('Menu ouvert');
    menu.classList.add('menu--open'); 
    menuIcon.style.display = 'none'; 
});


menuToggle.addEventListener('click', () => {
    console.log('Menu fermé');
    menu.classList.remove('menu--open'); 
    menuIcon.style.display = 'block'; u
    searchIcon.style.display = 'block'; 
});

const carousel = document.querySelector('.about__carousel');
const track = document.querySelector('.about__carousel-track');


carousel.addEventListener('wheel', (event) => {
    event.preventDefault(); 
    carousel.scrollLeft += event.deltaY; 
});



