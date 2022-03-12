$(function () {
    var header = $("header"),
        introH = $("#intro").innerHeight(),
        scrollOffSet = 0;
    checkScroll(scrollOffSet);
    $(window).on("scroll", function () {
        scrollOffSet = $(this).scrollTop();
        checkScroll(scrollOffSet);
    });

    function checkScroll() {
        console.log(scrollOffSet);
        if (scrollOffSet > introH) {
            header.addClass("fixed");

        } else {
            header.removeClass("fixed")
        }
    }

});
