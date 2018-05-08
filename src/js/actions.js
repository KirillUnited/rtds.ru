$(function () {
    $('body').on('click', '.sort__actions a.text', function () {
        $(this).parent().find('.nano, .show-all').toggleClass('hidden');
        return false;
    });
    $('body').on('click', '.sort__date a.text', function () {
        $(this).parent().find('.dropsort').toggleClass('hidden');
        return false;
    });
});