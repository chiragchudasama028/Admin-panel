$(document).ready(function() {
    $(".list-menu__title").on("click", function() {
        $(this).toggleClass('active-on');
        $(this).next('.list-menu__items').slideToggle();
    });
  });
  