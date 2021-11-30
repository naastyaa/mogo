$(function () {
    var header = $("header"),
        introH = $("#intro").innerHeight(),
        scrollOffSet = 0;

    $(window).on("scroll", function () {
        checkScroll();
    });

    function checkScroll() {
        scrollOffSet = $(this).scrollTop();
        console.log(scrollOffSet);
        if (scrollOffSet > introH) {
            header.addClass("fixed");

        } else {
            header.removeClass("fixed")
        }
    }

});
