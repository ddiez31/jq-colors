// good luck !

$(document).ready(function() {

    var btn = $("input");
    for (var i = 0; i < btn.length; i++) {
        var btnColor = $(btn[i]).attr("data-color");
        $(btn[i]).css("background", btnColor);
    }

    $(btn).click(function() {
        var bgColor = $(this).attr("data-color");
        if ($(":checkbox").is(":checked")) {
            $(".main").css("color", bgColor);
        } else {
            $("body").css("background", bgColor);
        }
    });
});