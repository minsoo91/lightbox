$(document).ready(function () {
	$('.lightbox_trigger').click(function(e) {
		e.preventDefault();
		var image_href = $(this).attr("href");
		if ($('#lightbox').length > 0) {
			$('#content').html('<img src="' + image_href + '" />');
			$('#lightbox').show();
		} else {
			var lightbox = 
			'<div id="lightbox">' +
			'<p>Click to close</p>' +
			'<div id="content">' +
			'<img src="' + image_href +'" />' +
			'</div>' +
			'</div>';
			$('body').append(lightbox);
		}
	});
	$('#lightbox').live('click', function () {
		$('#lightbox').hide();
	});
});