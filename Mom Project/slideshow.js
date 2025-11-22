let currentSlide = 1;

function showSlide(n) {
    const img = document.getElementById("slide");
    img.src = `slide${n}.jpg`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}
