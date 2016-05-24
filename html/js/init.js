(function($) {

	$(document).foundation();

	var myElement = document.querySelector('[data-headroom]');
	var headroom  = new Headroom(myElement, {
		scroller: document.querySelector('.off-canvas-wrapper')
	});

	headroom.init();

	var mySVGsToInject = document.querySelectorAll('.iconic-sprite');
	SVGInjector(mySVGsToInject);

}(jQuery));