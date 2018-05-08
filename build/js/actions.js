$(function () {
    $('body').on('click', '.sort__actions a.text', function () {
        $(this).parent().find('.nano, .show-all').toggleClass('hidden');
        return false;
    });
    $('body').on('click', '.sort__date a.text', function () {
        $(this).parent().find('.dropsort').toggleClass('hidden');
        return false;
    });

    $(document).click(function (e) {
		if (!$('.sort__actions, .sort__date').is(e.target) && $('.sort__actions, .sort__date').has(e.target).length === 0) {
			$('.nano, .show-all, .sort__date .dropsort').addClass('hidden');
		};
	});
});