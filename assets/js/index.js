$( document ).ready(function() {
    $("#second-half").scroll(function(){
        var currentScroll = $(this).scrollTop();
        if(currentScroll > ($(window).height())*.1 ) {
            $("i").hide(600);
        }
        else if(currentScroll > ($(window).height())*.2) {

        }
        else {
            $("i").show(600);
        }
    });
});