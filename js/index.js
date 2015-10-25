$(function() {

	// посчитаем ширину логотипов в футере
	var $partners = $('.partners-list'),
			footerWidth = 1436;

	$partners.find('img').each(function(item) {
		var width = $(this).width() / footerWidth * 100;
		$(this).parents('li').css('width', width + '%');
	});

	// маска ввода для телефона
	$("#phone").mask("+7 (999) 999-99-99");

	$(".content-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			category: {
				required: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			category: "Это поле обязательно для заполнения",
			phone: "Это поле обязательно для заполнения",
			name: {
				required: "Это поле обязательно для заполнения",
				minlength: "Это поле обязательно для заполнения"
			},
			email: {
				required: "Это поле обязательно для заполнения",
				email: "Адрес электронной почты некорректен (пример: name@domain.com)"
			}
		}
	});

	// обработка формы
	$('.content-form button').on('click', function(event) {

		var emptyFiledsCount = 0;
		$('.content-form').find('input').each(function() {
			if( $(this).val().replace(' ', '') === '' ) {
				emptyFiledsCount++;
			}
		})

		// если ошибок нет, то отправим данные формы
		if( !emptyFiledsCount ) {

			event.preventDefault();

			var formData = [];
			formData = $('.content-form').serializeArray();

			// отправим данные на сервер

			// $.ajax({
			// 	url: '/',
			// 	type: 'post',
			// 	data: formData,
			// 	success: function(data) {
			// 		console.log('send success');
			// 	},
			// 	error: function(error) {
			// 		console.log('send error ', error);
			// 	}
			// })

			// сообщение, после отправки
			$('#overlay').fadeIn(300).delay(1000).fadeOut(300);
			// сбросим данные с формы
			setTimeout(function() {
				location.reload();
			}, 2000)

		}

	})

});