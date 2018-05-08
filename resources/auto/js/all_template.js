function testfile() {
    var message;
    if (window.jQuery) {message = 'Здесь используется jQuery версия: ' + jQuery.fn.jquery;}
    else {message = 'jQuery не используется!';}
    return message;
}
$(document).ready(function () {
    $(document).on("click",".i_agree_tou",function () {
        var checkFind = $(this);
        var a = $(this).is(':checked');
        var b = $(this).parents("form");
        var buttom = $(b).find("input[type=submit]");
        if (a) {
            $(buttom).removeAttr("disabled");
        }
        else {
            $(buttom).attr("disabled","disabled");
        }
    });

    var checkFind = $(".i_agree_tou");
    var a = $(".i_agree_tou").is(':checked');
    var b = $(".i_agree_tou").parents("form");
    var buttom = $(b).find("input[type=submit]");
    if (checkFind) {
        if (a) {
            $(buttom).removeAttr("disabled");
        }
        else {
            $(buttom).attr("disabled","disabled");
        }
    }
    $(document).on("click",".fancy_page", function () {
        var link = this.href;
        $.fancybox({
            href : link,
            type : "ajax"
        });
        return false;
    })
})
