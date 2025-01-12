$(document).ready(function () {
    let currentSlide = 0;
    const slides = $(".testimonial-slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.removeClass("active");
        $(slides[index]).addClass("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);
});
