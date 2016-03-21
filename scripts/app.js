import $ from 'jquery';
import slimscroll from 'fullpage.js/vendors/jquery.slimscroll.js';
import fullpage from 'fullpage.js';

// fullPage plugin initialization
$('.sections').fullpage({
	anchors: ['homepage', 'myWorks', 'mySkills', 'contactMe'],
	sectionSelector: '.sections__item',
	scrollOverflow: true,
	verticalCentered: false,
	scrollBar: false,
	css3: true
});

// Hamburger and mobile menu toggle
$('.hamburger').click(function () {
	$(this).toggleClass('hamburger_active');
	$('.mobile-menu').toggleClass('mobile-menu_active');
});
