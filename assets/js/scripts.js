$(document).ready(function () {
  //fixedHeader();
  $(".owl-carousel").owlCarousel({
    loop:true,
    items: 1,
    autoplay:1000,
    autoplaySpeed: 1000
  });
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
