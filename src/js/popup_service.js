$(document).ready(function () {
    $('body').on('click', 'a[href=#newService]', function() {
        $('#newService').toggleClass('hidden');
    });
    $('body').on('click', '#popup_close', function () {
        $('#newService').toggleClass('hidden');
    });
});