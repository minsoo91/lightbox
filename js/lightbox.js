$(document).ready(function () {
	$('.lightbox_trigger').click(function(e) {
		e.preventDefault();
		var image_href = $(this).attr("href");
		$('#content').html('<img src="' + image_href + '" />');
		$('#lightbox').show();
	});
	$('#lightbox').click(function () {
		$('#lightbox').hide();
	});
});