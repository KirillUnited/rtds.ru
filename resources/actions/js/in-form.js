$(document).ready(function(){
	
	//Узнать максимальную выгоду
	$('#tab-form-benefits').load( "/include/in_form_benefits.php");
	$(document).on("submit","#tab-form-benefits form", function (e) {
		$dataForm = $(this).serialize();
		//console.log($(this).attr("action"));
		$.ajax({
			url: $(this).attr("action")+($(this).attr("action").indexOf('?') !== -1 ? '&' : '?') + "web_form_submit=Y",
			method: "post",
			data: $dataForm,
			success: function (data) {
				//console.log(data);
				$("#tab-form-benefits").html('<div class="classic form-only">Соообщение отправлено</div>');
				//$("#tab-form-benefits").trigger("refresh");
			}
		})
		return false;
	})
	
	//Заявка на кредит
	$('#tab-form-credit').load( "/include/in_form_credit.php");
		$(document).on("submit","#tab-form-credit form", function (e) {
		$dataForm = $(this).serialize();
		$.ajax({
			url: $(this).attr("action")+($(this).attr("action").indexOf('?') !== -1 ? '&' : '?') + "web_form_submit=Y",
			method: "post",
			data: $dataForm,
			success: function (data) {
				$("#tab-form-credit").html('<div class="classic form-only">Соообщение отправлено</div>');

			}
		})
		return false;
	})
	
	//Задать вопрос
	$('#tab-form-callback').load( "/include/in_form_callback.php");
		$(document).on("submit","#tab-form-callback form", function (e) {
		$dataForm = $(this).serialize();
		$.ajax({
			url: $(this).attr("action")+($(this).attr("action").indexOf('?') !== -1 ? '&' : '?') + "web_form_submit=Y",
			method: "post",
			data: $dataForm,
			success: function (data) {
				$("#tab-form-callback").html('<div class="classic form-only">Соообщение отправлено</div>');

			}
		})
		return false;
	})
	
	//Запись на сервис
	$('#tab-form-service').load( "/include/in_form_service.php");
		$(document).on("submit","#tab-form-service form", function (e) {
		$dataForm = $(this).serialize();
		$.ajax({
			url: $(this).attr("action")+($(this).attr("action").indexOf('?') !== -1 ? '&' : '?') + "web_form_submit=Y",
			method: "post",
			data: $dataForm,
			success: function (data) {
				$("#tab-form-service").html('<div class="classic form-only">Соообщение отправлено</div>');

			}
		})
		return false;
	})
	
	//Заявка на автомобиль
	$('#tab-form-order').load( "/include/in_form_order.php");
		$(document).on("submit","#tab-form-order form", function (e) {
		$dataForm = $(this).serialize();
		$.ajax({
			url: $(this).attr("action")+($(this).attr("action").indexOf('?') !== -1 ? '&' : '?') + "web_form_submit=Y",
			method: "post",
			data: $dataForm,
			success: function (data) {
				$("#tab-form-order").html('<div class="classic form-only">Соообщение отправлено</div>');

			}
		})
		return false;
	})
	
	//Обратная связь
	$('#tab-form-feedback').load( "/include/in_form_feedback.php");
		$(document).on("submit","#tab-form-feedback form", function (e) {
		$dataForm = $(this).serialize();
		$.ajax({
			url: $(this).attr("action")+($(this).attr("action").indexOf('?') !== -1 ? '&' : '?') + "web_form_submit=Y",
			method: "post",
			data: $dataForm,
			success: function (data) {
				$("#tab-form-feedback").html('<div class="classic form-only">Соообщение отправлено</div>');

			}
		})
		return false;
	})
	
	//Заявка на обмен
	$('#tab-form-assis').load( "/include/in_form_assis.php");
		$(document).on("submit","#tab-form-assis form", function (e) {
		$dataForm = $(this).serialize();
		$.ajax({
			url: $(this).attr("action")+($(this).attr("action").indexOf('?') !== -1 ? '&' : '?') + "web_form_submit=Y",
			method: "post",
			data: $dataForm,
			success: function (data) {
				$("#tab-form-assis").html('<div class="classic form-only">Соообщение отправлено</div>');

			}
		})
		return false;
	})

	//Заявка братный звонок
    $('#tab-form-callback').load( "/include/in_form_callback.php");
    $(document).on("submit","#tab-form-callback form", function (e) {
        $dataForm = $(this).serialize();
        $.ajax({
            url: $(this).attr("action")+($(this).attr("action").indexOf('?') !== -1 ? '&' : '?') + "web_form_submit=Y",
            method: "post",
            data: $dataForm,
            success: function (data) {
                $("#tab-form-callback").html('<div class="classic form-only">Соообщение отправлено</div>');

            }
        })
        return false;
    })
});