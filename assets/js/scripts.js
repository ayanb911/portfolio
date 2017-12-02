$(document).ready(function () {
  fixedHeader();
})


function fixedHeader(){
  var scroll = $(window).scrollTop(),
  menu = $("#menu");
  //console.log(scroll);
  if(scroll >= 100){
    menu.addClass("center-shadow");
  }
  else{
    menu.removeClass("center-shadow");
  }
}
