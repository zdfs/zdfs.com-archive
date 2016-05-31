(function($) {

	$(document).foundation();

	var myElement = document.querySelector('[data-headroom]');
	var headroom  = new Headroom(myElement, {
		scroller: document.querySelector('.off-canvas-wrapper'),
		tolerance: 40
	});

	headroom.init();

	$('.gallery-block').lightGallery();

}(jQuery));