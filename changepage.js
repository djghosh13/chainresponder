$(document).ready(function() {
    $("nav a").click(function() {
        $("#page").attr("src", $(this).attr("data-path"));
    });
})