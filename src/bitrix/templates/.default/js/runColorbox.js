jQuery(document).ready(function() {

    jQuery(".zoom2").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false
    });

    jQuery(".zoom").colorbox({height:"100%"});

    jQuery(".zoom_saleparts").colorbox({width:"400px", height:"300px"});

    jQuery(".order_callback").colorbox({inline:true, width:"700px"});

    jQuery(".carorder_small").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false
    });
    jQuery(".modal_assis").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false
    });

    jQuery(".modal_parts_vin").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
        onClosed:function(){$('.e-mail').hide();console.log('hid'); }
    });
	 jQuery(".modal_bron").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
        onClosed:function(){$('.e-mail').hide();console.log('hid'); }
    });
    jQuery(".modal_callback").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
		onClosed:function(){$('.e-mail').hide();console.log('hid'); },
    });

    jQuery(".modal_testdrive").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
		onClosed:function(){$('.e-mail').hide();console.log('hid'); },
    });

	jQuery(".modal_benefits").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
		onClosed:function(){$('.e-mail').hide();console.log('hid'); },
    });
	
    jQuery(".modal_order").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
		onClosed:function(){$('.e-mail').hide();console.log('hid'); },
    });

    jQuery(".modal_credit").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
		onClosed:function(){$('.e-mail').hide();console.log('hid'); },
    });

    jQuery(".modal_service").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
		onClosed:function(){$('.e-mail').hide();console.log('hid'); },
    });

    jQuery(".modal_leasing").colorbox({
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
		onClosed:function(){$('.e-mail').hide();console.log('hid'); },
    });

    jQuery(".modal_stock").colorbox({
    	href:"/include/stock.php",
    	data:{model:$('#stock-model').text(), vin:$('#stock-vin').text()},
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
		onClosed:function(){$('.e-mail').hide();console.log('hid'); },

    });
	jQuery(".modal_request").colorbox({//new
        inline:true,
        close:"Закрыть окно",
        overlayClose:false,
        returnFocus:false,
		onClosed:function(){$('.e-mail').hide();console.log('hid'); },
    });

});