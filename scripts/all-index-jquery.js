$(document).ready(function() {
    // AOS
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 650, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    // Burger

    $('.burger').click(function(event) {
        $('.burger, .hidden').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.hidden-link').click(function(event) {
        $('.burger, .hidden').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // Links

      // Anchor ===============
      $('a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50 //- 50
        }, 1200);
    });
    // ======================

    // Bac-to-top ===========
    function backToTop() {
        let button = $('.back-to-top');
    
        $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 800) {
        button.fadeIn(500, "linear");
        } else {
            button.fadeOut(500, "linear");
        }
        });
    
        button.on('click', (e) => {
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 800);
        })
    }
    backToTop();
    // =======================

    // Hover off =============
    $('body').on('touchstart', function() {});
    // =======================
    // Popup
     // открыть по кнопке
     $('.button-popup').click(function() { 
        
        $('.popup').fadeIn().css("display", "flex");
        $("body").css("overflow","hidden");
        // $('.popup').addClass('disabled');
    });

    // закрыть на крестик
    $('.popup__close').click(function() { 
        $('.popup').fadeOut();
        $("body").css("overflow","visible");
    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        let popup = $('.popup__inner');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.popup').fadeOut();
            $("body").css("overflow","visible");
        }
    });
});