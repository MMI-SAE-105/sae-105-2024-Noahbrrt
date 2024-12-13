
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

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".schedule__carousel");

    carousels.forEach((carousel) => {
        const leftArrow = carousel.querySelector(".carousel__arrow--left");
        const rightArrow = carousel.querySelector(".carousel__arrow--right");
        const cardContainer = carousel;
        const cards = carousel.querySelectorAll(".schedule__card");

        const middleIndex = Math.floor(cards.length / 2);

        const cardWidth = cards[0].offsetWidth + 20; 
        cardContainer.scrollLeft = middleIndex * cardWidth;

      
        leftArrow.addEventListener("click", () => {
            cardContainer.scrollBy({
                left: -cardWidth,
                behavior: "smooth",
            });
        });

       
        rightArrow.addEventListener("click", () => {
            cardContainer.scrollBy({
                left: cardWidth,
                behavior: "smooth",
            });
        });
    });
});

const lightBox = document.querySelector("#lightbox");
const lightBoxImg = lightBox.querySelector("img");

document.body.addEventListener("click", (evt)=> {
    console.log(evt.target);

    if (evt.target.matches("[data-full-img]")) {
        lightBoxImg.src = evt.target.dataset.fullImg;
        lightBox.showModal();}
    });


 lightBox.addEventListener("click", (evt) => {
    lightBox.classList.add("sortie");
    lightBox.addEventListener("animationend", () => {
        lightBox.classList.remove("sortie");
        lightBox.close();
    }, {once: true});
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.about__carousel--track');
    const images = document.querySelectorAll('.about__carousel--image');
    const prevButton = document.querySelector('.about__carousel--arrow-left');
    const nextButton = document.querySelector('.about__carousel--arrow-right');
    const points = document.querySelectorAll('.point');

    
    let currentIndex = Math.floor(images.length / 2); 

    const updateCarousel = () => {
        const imageWidth = images[0].clientWidth + 20; 
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

        points.forEach((point, index) => {
            point.classList.toggle('active', index === currentIndex);
        });
    };

    const moveToNextImage = () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateCarousel();
    };

    const moveToPrevImage = () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1;
        }
        updateCarousel();
    };

    
    nextButton.addEventListener('click', moveToNextImage);
    prevButton.addEventListener('click', moveToPrevImage);

    
    points.forEach((point, index) => {
        point.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    
    updateCarousel();
});
