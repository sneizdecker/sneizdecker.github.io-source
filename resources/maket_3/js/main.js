;$(document).ready(function() {

	/* Top Slick slider */

	$(".top-slider").slick({
		autoplay: true,
		arrows: true,
		dots: true,
		slide: ".ts-slide",
		prevArrow: '<button type="button" class="slick-prev">Previous <i class="icons icon-ts-prev"></i></button>',
		nextArrow: '<button type="button" class="slick-next">Next <i class="icons icon-ts-next"></i></button>'
	});

	/* Mobile search bar */
	$(".mob-search-button").click(function() {
		$(".mob-search-bar").fadeToggle(100);
	});

	/* Expanding search bar */

	// Expand search bar
	$(".exp-search").click(function(e) {
		e.stopPropagation();
		if ($(this).width() < 180) {
			$(this).animate({
			width: "180px"
			}, "fast");
		}

		// Displace search overlay
		$(".search-overlay").css("z-index", "1");
	});

	// Roll up search bar
	$("html").click(function() {
		$(".exp-search").animate({
			width: "35px"
		}, "fast");

		// Displace search icon to default
		$(".search-overlay").css("z-index", "10");
	});

	/* Tabs */

	$(".sl-tabs a").on("click", function(e)  {
		var currAttrVal = $(this).attr("href");
		
		$(".slider-tabs " + currAttrVal).fadeIn(300).siblings().hide();
		$(this).addClass("active").parent("li").siblings().find("a").removeClass("active");
		e.preventDefault();
	});

	/* Bottom Slick slider */

	$(".bottom-slider").slick({
		arrows: true,
		autoplay: true,
		autoplaySpeed: 1500,
		speed: 600,
		slide: '.car-item',
		slidesToShow: 4,
		slidesToScroll: 4,
		centerMode: true,
		variableWidth: true,
		nextArrow: '<button type="button" class="slick-next active"><i class="icons icon-bs-next"></i></button>',
		prevArrow: '<button type="button" class="slick-prev">Previous <i class="icons icon-bs-prev"></i></button>',
	});

	/* Bottom slider arrows */

	$(".slick-prev").hover(function() {
		$(".icon-bs-prev").toggleClass("active");
	});

	/* Bottom slider item hover */

	$(".bottom-slider").find(".car-item").hover(function() {
		$(this).find(".shop-it").fadeToggle(100);
	});

	/* Currency toggle */

	$(".currency").click(function(e) {
		e.stopPropagation();
		$(".cur-ddm").fadeToggle(10);
		$(".icon-currency").toggleClass("active");
	});

	$(".eur").click(function() {
		$(".curc").text("Э eu");
	});

	$(".rub").click(function() {
		$(".curc").text("₽ ru");
	});

	$(".dol").click(function() {
		$(".curc").text("$ us");
	});

	$("html").click(function() {
		$(".cur-ddm").fadeOut(10);
		$(".icon-currency").removeClass("active");
	});

	/* Dropdown menu */

	$(".main-menu li").hover(function() {
		$(this).children(".icon-mm-item").toggleClass("active");
		$(this).children(".drop-down-menu").fadeToggle(10);
	});

	/* Cart toggle */

	$(".your-cart").hover(function() {
		if (($(this).hasClass("active")) == false) {
			$(".icon-cart").toggleClass("onhov");
		}
	});

	$(".your-cart").click(function(e) {
		e.stopPropagation();
		$(this).toggleClass("active");
		$(".icon-cart").toggleClass("active");
		$(".icon-cart").toggleClass("onhov");
		$(".cart-expand").fadeToggle(10);
	});

	$("html").click(function() {
		$(".your-cart").removeClass("active");
		$(".icon-cart").removeClass("active");
		$(".icon-cart").removeClass("onhov");
		$(".cart-expand").fadeOut(10);
	});

	/* Promo block hover */

	$(".ovr").hover(function() {
		$(this).find(".pb-shop-now").delay(200).fadeToggle(100);
	});
});
