// Popup
$(document).ready(function() {
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