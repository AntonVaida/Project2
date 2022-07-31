"use strict"
$(document).ready(function(){
    $('.header__burger').click(function(even) {
      $('.header__burger, .header__list, .header__items, .header__items_logo, .header__table, .wrapper').toggleClass('active')
      $('body').toggleClass('lock')
    });
});
