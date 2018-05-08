jQuery(document).ready(function() {

  var hash = window.location.hash;
  hash && $('ul.nav-tabs a[href="' + hash + '"]').tab('show');

  var h1 = jQuery('h1').text();
  var splitparts = h1.split('-');
  if (splitparts[0]!=undefined && splitparts[1]!=undefined)jQuery('h1').html('<span>'+splitparts[0]+'</span> <small>'+splitparts[1]+'</small>');
  

  jQuery(".popovers").popover();
  jQuery(".popovers").on('show.bs.popover', function(){
    jQuery(this).addClass('active');
  });
  jQuery(".popovers").on('hide.bs.popover', function(){
    jQuery(this).removeClass('active');
  });
    
  jQuery(".player").flowplayer({ 
     swf: "/bitrix/templates/.default/flowplayer/flowplayer.swf"
  });

  jQuery('.previews a').click(function(event){

    event.preventDefault();

    var $this = jQuery(this);
    var newImage = new Image();

    newImage.onload = function(){
                                  jQuery('#main-img img').attr('src', newImage.src);
		                  $this.addClass('current').siblings().removeClass('current');		
	                        };

    newImage.src = $this.attr('href');

    return false;
  });

});

