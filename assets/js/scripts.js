$(document).ready(function () {
    fixedHeader();
    projectScroll();
    $(window).scroll(function () {
        fixedHeader();
    })
})

function fixedHeader(){
    var scroll = $(window).scrollTop(),
        menu = $("#menu");
    console.log(scroll);
    if(scroll >= 100){
        menu.addClass("center-shadow");
    }
    else{
        menu.removeClass("center-shadow");
    }
}

function projectScroll(){
    var projectList = $(".project");
    projectList.each(function (i) {
        var that = $(this);
        setTimeout(function () {
            console.log(i);
            that.addClass("is-active");
            $(".project").not(that).removeClass("is-active");
        }, i*2000);
    });
    setTimeout(function(){
        projectScroll();
    }, 2000* projectList.length - 1);
}
