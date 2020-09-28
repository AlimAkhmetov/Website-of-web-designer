$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .hidden').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.hidden-link').click(function(event) {
        $('.burger, .hidden').toggleClass('active');
        $('body').toggleClass('lock');
    });
  });

  