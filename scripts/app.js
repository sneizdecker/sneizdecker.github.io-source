import $ from 'jquery';
import ScrollMagic from 'scrollmagic';

// Hamburger and mobile menu toggle
$('.hamburger').click(function () {
	$(this).toggleClass('hamburger_active');
	$('.mobile-menu').toggleClass('mobile-menu_active');
});

// Anchor navigation
$(function () {
	$('.menu__link').click(function () {
		let target = $(this.hash);
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 400);
				return false;
			}
		}
	});
});

// ScrollMagic parallax
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
	duration: 100,
	offset: 0
})
.setPin('.hero')
.addTo(controller);
