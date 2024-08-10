let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
