$(document).ready(function(){
    $('.testimonial-slider').slick({
        autoplay: true,                // Automatically start the slider
        autoplaySpeed: 5000,           // Change slide every 5 seconds
        dots: true,                    // Enable navigation dots
        arrows: true,                  // Enable previous/next arrows
        fade: true,                    // Enable fade effect for a smooth transition
        speed: 1000,                   // Slide transition speed
        pauseOnHover: true,            // Pause the slider when hovered over
        responsive: [
            {
                breakpoint: 768,      // For small screens, show only 1 slide at a time
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
