(function($) {

	$(document).foundation();

	var myElement = document.querySelector('[data-headroom]');
	var headroom  = new Headroom(myElement, {
		scroller: document.querySelector('.off-canvas-wrapper'),
		tolerance: 40
	});

	headroom.init();

	grunticon(
		[
			'/iconic/icons.data.svg.css',
			'/iconic/icons.data.png.css',
			'/iconic/icons.fallback.css'
		],
		grunticon.svgLoadedCallback
	);

}(jQuery));