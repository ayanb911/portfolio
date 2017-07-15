$(document).ready(function () {
    projectListScroll();
    siteMade();
})


/*function fixedHeader(){
    var scroll = $(window).scrollTop(),
        menu = $("#menu");
    //console.log(scroll);
    if(scroll >= 100){
        menu.addClass("center-shadow");
    }
    else{
        menu.removeClass("center-shadow");
    }
}*/

function projectListScroll() {
    var projectList = $(".project");
    projectList.hover(
        function () {
            var id = "#" + $(this).attr("data-info");
            var notId = $(".project-pop").not(id);

            $(".project").not(this).removeClass("is-active");
            notId.addClass("hidden").removeClass("is-active");
            notId.find(".pictures").removeClass("is-active");
            setTimeout(function () {
                notId.find(".pictures img").removeClass("is-animating");
                notId.find(".content").removeClass("is-active");
            }, 300);

            $(this).addClass("is-active");
            $(id).removeClass("hidden");
            $(id).find(".pictures").addClass("is-active");
            setTimeout(function () {
                $(id).find(".pictures img").addClass("is-animating");
                $(id).find(".content").addClass("is-active");
            }, 300);
        }
    )
}

function siteMade(){
    var hoverHtml = '<div class="row-icons">'+
'<img src="assets/images/coding%20icons/html5.png" title="Photoshop">'+
        '<img src="assets/images/coding%20icons/sass.svg" title="PHP" class="php">'+
        '<img src="assets/images/coding%20icons/jquery.gif" title="Drupal" class="drupal">'+
        '<img src="assets/images/coding%20icons/git.png" title="Drupal" class="drupal">'+
        '<img src="assets/images/coding%20icons/gulp.png" title="Drupal" class="drupal">'+
        '</div>';
    var link = $("#contact>.info");

    console.log(hoverHtml);

    link.hover(function () {
        link.html(hoverHtml);
        console.log(1);
    },
    function () {
        link.html('<p>How was this site made?</p>');
        console.log(2);
    })
}

/*function projectScroll(){
    var id = "#" + $(this).attr("data-info");
    var notId = $(".project-pop").not(id);

    var projectList = $(".project");
    $(".project").not(this).removeClass("is-active");
    notId.addClass("hidden").removeClass("is-active");
    notId.find(".pictures").removeClass("is-active");
    setTimeout(function () {
        notId.find(".pictures img").removeClass("is-animating");
        notId.find(".content").removeClass("is-active");
    }, 300);
    projectList.each(function (i) {
        var that = $(this);
        hoveringProject = setTimeout(function () {
            var id = "#"+that.attr("data-info");
            var notId = $(".project-pop").not(id);
            that.addClass("is-active");
            $(id).removeClass("hidden");
            $(id).find(".pictures").addClass("is-active");
            setTimeout(function () {
                $(id).find(".pictures img").addClass("is-animating");
                $(id).find(".content").addClass("is-active");
            }, 300);

            $(".project").not(that).removeClass("is-active");
            notId.addClass("hidden").removeClass("is-active");
            notId.find(".pictures").removeClass("is-active");
            setTimeout(function () {
                notId.find(".pictures img").removeClass("is-animating");
                notId.find(".content").removeClass("is-active");
            }, 300);
        }, i*4000);
        projectList.hover(function () {
            return;
        })
    });

    setTimeout(function(){
        projectScroll();
    }, 4000* projectList.length - 1);

}*/

