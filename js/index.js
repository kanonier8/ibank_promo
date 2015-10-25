$(function() {

	// посчитаем ширину логотипов в футере
	var $partners = $('.partners-list'),
			footerWidth = 1436;

	$partners.find('img').each(function(item) {
		var width = $(this).width() / footerWidth * 100;
		$(this).parents('li').css('width', width + '%');
	});

	// обработка формы
	$('.content-form button').on('click', function(event) {
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
		$('.content-form').find('input').val('');

	})

});