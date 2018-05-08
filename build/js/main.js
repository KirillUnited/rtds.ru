function printBlock() {
	PrintContent = $('#PrintContent').html();
	$('body').addClass('printSelected');
	$('body').append('<div class="printSelection">'+PrintContent+'</div>');
	$('.no-print').hide();
	//window.print();
	//window.setTimeout(pageCleaner,0);
	return false;
}

function pageCleaner(){
	$('body').removeClass('printSelected');
	$('.printSelection').remove();
	$('.no-print').show();
	//$('.ymaps-map.ymaps-i-ua_js_yes').eq(1).hide();
}
$(function(){
	$('#onmodalAction').fancybox({});

	$('.notifications').appendTo('body');

	// посетителей на сайте
    setTimeout(function () {
        $('.notifications .block.users span').html(rand(30, 100));
        $('.notifications .block.users').animate({
            'left': '0%'
        }, 300, function () {
            setTimeout(function () {
                $('.notifications .block.users').animate({
                    'left': '-100%'
                }, 300);
            }, 5000);
        });
    }, 3000);

	
});
$(document).on("click",".formindividual", function (e) {

	if(e.target.dataset.action){
		titleParam = "title=" + e.target.dataset.action + "&";
	}
	else{
		titleParam = "";
	}
	
    var url = "/include/stock.php?" + titleParam;
    var model,vin;
    if ((model=$(this).data("model")) != "undefined"){
        url = url+"model="+encodeURI(model)+"&"
    }
    if ((vin = $(this).data("vin")) != "undefined"){
        url = url+"vin="+encodeURI(vin)+"&"
    }
    $.fancybox({
        href : url,
        type: "ajax",
        scrolling: "visible"

    });
    return false;
})
function rand(min, max) {if (max) {return Math.floor(Math.random() * (max - min + 1)) + min;} else {return Math.floor(Math.random() * (min + 1));}}