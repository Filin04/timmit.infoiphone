$(document).ready(function () {
    $(".contentBlock").hover(
        function () {
            $(this).children('.flex').children('.text').toggleClass('active');
            $(this).children('.flex').children('.text').slideToggle(400);

        },
        function () {
            $(this).children('.flex').children('.text').slideToggle(400);
        });

});
