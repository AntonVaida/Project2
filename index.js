"use strict"
$(document).ready(function(){
    $('.header__burger').click(function(even) {
      $('.header__burger, .header__list, .header__items, .header__items_logo, .header__table, .wrapper').toggleClass('active')
      $('body').toggleClass('lock')
    });
});
let login = prompt("Введіть Login" , "");
let password;
if( login === "Admin"){
  password = prompt("Введіть Password", "");
  if(password === "Господар"){
    alert("Ласкаво просимо!");
  }
  else if(password === "" || password == false){
    alert("Скасовано");
  }
  else{
    alert("Неправильний пароль");
  }
}
else if(login === "" || login == false){
  alert("Скасовано");
}
else{
  alert("Я вас не знаю!");
}