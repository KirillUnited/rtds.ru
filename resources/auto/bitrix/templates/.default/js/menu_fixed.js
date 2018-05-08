/*
  $(document).ready(function() {

  if ($('#stick_menu').length > 0) {
	var start_pos=$('#stick_menu').offset().top;
	 $(window).scroll(function(){
	  if ($(window).scrollTop()>=start_pos) {
	      if ($('#stick_menu').hasClass()==false) $('#stick_menu').addClass('to_top');
	  }
	  else $('#stick_menu').removeClass('to_top');
	 });
  }
});
*/

$(document).ready(function() {
	setTimeout(function () {
        if ($('.js_table_compl').length > 0) {
            var start_pos=$('.js_table_compl').offset().top;
            $(window).scroll(function(){
                if ($(window).scrollTop()>=start_pos) {
                    if ($('.js_table_compl').hasClass('to_top_table')==false) $('.js_table_compl').addClass('to_top_table');
                }
                else {
                    $('.js_table_compl').removeClass('to_top_table');
                }
            });
        }
    },2000);
});


// oNas = $(".tab-content").offset().top-50;

//   var menu = $('#stick_menu'),
//   pos = menu.offset();

//   $(window).scroll(function(){
//    if($(this).scrollTop() > oNas && menu.hasClass('default')){
//     menu.fadeIn('fast', function(){
//      $(this).removeClass('default').addClass('fixed_top_menu').fadeIn('fast');
//     });
//    } else if($(this).scrollTop() <= oNas && menu.hasClass('fixed_top_menu')){
//     menu.fadeIn('fast', function(){
//      $(this).removeClass('fixed_top_menu').addClass('default').fadeIn('fast');
//     });
//    };
//   });