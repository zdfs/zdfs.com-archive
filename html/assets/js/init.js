(function($) {

	$(document).foundation();

	var myElement = document.querySelector('[data-headroom]');
	var headroom  = new Headroom(myElement, {
		tolerance: 15
	});

	headroom.init();

	$('.gallery-block').lightGallery();

}(jQuery));