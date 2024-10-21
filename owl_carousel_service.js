$('.btn-en-glish, .btn-ar-abic').on('click', function() {
    const language = $(this).data('attr') === "language-ar" ? "ar" : "en";
    localStorage.setItem("language", language);
    
    console.log("Destroying carousels..."); // تحقق من التدمير
    $('.owl-carousel-second').trigger('destroy.owl.carousel').removeClass('owl-loaded'); // تدمير الكاروسيل الثاني

    // إعادة التهيئة مع الإعدادات الجديدة
    initializeOwlCarouselSecond(); // إعادة تهيئة الكاروسيل الثاني
});



function initializeOwlCarouselSecond() {
    console.log("Initializing second carousel..."); // تحقق من الاستدعاء

    const isRtl = localStorage.getItem("language") === "ar";

    $(document).ready(function() {
        $('.owl_carousel_service').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1000,
            rtl: localStorage.getItem("language") === "ar",
            responsive: {
                0: {
                    items: 5
                },
                600: {
                    items: 6
                },
                960: {
                    items: 7
                },
                1200: {
                    items: 8
                }
            }
        });
    });
    
}

$(document).ready(function() {
    initializeOwlCarouselSecond(); // تأكد من استدعاء الكاروسيل الثاني أيضاً
});
