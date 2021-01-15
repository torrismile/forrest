// Carousel Gallery

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${index * carouselWidth}px)`;

    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
        next.classList.add('hide');
    }
})

prev.addEventListener('click', () => {
    index--;
    next.classList.remove('hide');
    if (index === 0) {
        prev.classList.remove('show');
    }
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
})

let heroImg = document.querySelector('.hero-img');
let heroText = document.querySelector('.hero-text');

let miniImg1 = document.querySelector('#img-1');
let miniImg2 = document.querySelector('#img-2');  
let miniImg3 = document.querySelector('#img-3');  

function changeImg () {
    miniImg1.addEventListener('click', () => {
        heroImg.src = "./img/header.jpg";
        heroText.innerHTML = "African <strong>Lion</strong>";
    })

    miniImg2.addEventListener('click', () => {
        heroImg.src = "./img/zebra.jpg";
        heroText.innerHTML = "Sibirian <strong>Zebra</strong>";
    })

    miniImg3.addEventListener('click', () => {
        heroImg.src = "./img/tiger.jpg";
        heroText.innerHTML = "Russian <strong>Tiger</strong>";
    })
}

// Navbar toggle

let mainNav = document.querySelector("#js-menu");
let navBarToggle = document.querySelector("#js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});
