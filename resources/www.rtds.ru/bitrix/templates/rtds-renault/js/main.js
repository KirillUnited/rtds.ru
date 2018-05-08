$(document).ready(function(){
	$(document).on('click', '#carfinPrice', function(){
		ga('send', 'event', 'carfin'); yaCounter8060959.reachGoal('carfin');
	});
	
	$(document).on('submit', 'form', function(){
		var forms = [
			'new_car',
			'leasing',
			'parts',
			'service',
			'callback',
			'block_otdel_prod',
			'block_otdel_prod_probeg',
			'block_trade_in',
			'block_korpor_klient',
			'block_servis',
			'block_zapchsti_aksess',
			'block_kredit_strah',
			//'block_vakansii',
			'assessment',
			'for_new_auto',
			'auto_probeg',
			'main_service',
			'service',
			'feedback',
			'car_stock',
			'test_drive',
			'car_order2',
			'credit'
		];
		
			
		for(var i = 0; i < forms.length; i++){
			if(this.name == forms[i]){
				ga('send', 'event', 'form');
				yaCounter8060959.reachGoal('form'); 
				break;
			}
		}
	});
	

	$(".detail_car_slider").bxSlider({pager:false});
	
});