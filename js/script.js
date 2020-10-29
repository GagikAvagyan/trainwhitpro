$(document).ready(function () {

	//	Header scroll
	$(document).on('scroll', function () {
		if ($(window).scrollTop() > 130 && $('header').hasClass('bg-transparent')) {
			$('header.header-transparent').removeClass('bg-transparent');
		} else if ($(window).scrollTop() <= 130 && !$('header').hasClass('bg-transparent')) {
			$('header.header-transparent').addClass('bg-transparent');
		}
	});

	$('.feedback-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.feedback-slider-thumb',
		prevArrow: $('.feedback-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.feedback-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					arrows: false,
					dots: true,
					variableWidth: true,
					fade: false,
				}
			}
  		],
	});

	$('.photos-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});

	$('.photos-slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});

	$('.photos-slider3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});

	$('.photos-slider4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});

	$('.certificates-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});

	$('.certificates-slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});

	$('.certificates-slider3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});

	$('.certificates-slider4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});

	$('.fitness-schools-slider').slick({
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 4,
					dots: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					dots: true,
				}
			}
  		]
	});

	$('.feedback-slider-thumb').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feedback-slider',
		dots: false,
		arrows: false,
		vertical: true,
		//		centerMode: true,
		focusOnSelect: true,
	});

	$('.training-slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 1,
					dots: true,
				}
			}
  		]
	});

	$('.subscription-slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		prevArrow: $('.subscription-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.subscription-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					variableWidth: true,
					infinite: true,
					arrows: true,
				}
			}
  		]
	});

	$('.select-wrap select').select2({
		minimumResultsForSearch: 6,
	});



	var initConfirmationsSlider = function () {
		var $carousel = $('.confirmations-slider');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: true,
					dots: false,
					infinite: false,
					swipe: false,
					draggable: false,
					adaptiveHeight: true,
					prevArrow: $('.confirmations-slider-wrap .slider-navigation .slick-prev'),
					nextArrow: $('.confirmations-slider-wrap .slider-navigation .slick-next'),
				});
			}
		}
	}

	var initConfirmationsSlider2 = function () {
		var $carousel = $('.confirmations-slider-2');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: true,
					dots: false,
					infinite: false,
					swipe: false,
					draggable: false,
					adaptiveHeight: true,
					prevArrow: $('.confirmations-slider-wrap-2 .slider-navigation .slick-prev'),
					nextArrow: $('.confirmations-slider-wrap-2 .slider-navigation .slick-next'),
				});
			}
		}
	}

	var servicesSlider = function () {
		var $carousel = $('.services-items-slider');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	var servicesSlider2 = function () {
		var $carousel = $('.services-items-slider2');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	var servicesSlider3 = function () {
		var $carousel = $('.services-items-slider3');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	var servicesSlider4 = function () {
		var $carousel = $('.services-items-slider4');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	var servicesSlider5 = function () {
		var $carousel = $('.services-items-slider5');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	var servicesSlider6 = function () {
		var $carousel = $('.services-items-slider6');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	var progressSlider = function () {
		var $carousel = $('.progress-items-slider');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	var progressSlider2 = function () {
		var $carousel = $('.progress-items-slider2');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	var progressSlider3 = function () {
		var $carousel = $('.progress-items-slider3');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	var progressSlider4 = function () {
		var $carousel = $('.progress-items-slider4');
		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				});
			}
		}
	}

	initConfirmationsSlider();
	initConfirmationsSlider2();
	servicesSlider();
	servicesSlider2();
	servicesSlider3();
	servicesSlider4();
	servicesSlider5();
	servicesSlider6();
	progressSlider();
	progressSlider2();
	progressSlider3();
	progressSlider4();

	$(window).on('resize orientationchange', function () {
		initConfirmationsSlider();
		initConfirmationsSlider2();
		servicesSlider();
		servicesSlider2();
		servicesSlider3();
		servicesSlider4();
		servicesSlider5();
		servicesSlider6();
		progressSlider();
		progressSlider2();
		progressSlider3();
		progressSlider4();
	});




	$('.posts-slider').slick({
		slidesToShow: 1,
		variableWidth: true,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: $('.posts-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.posts-slider-wrap .slider-navigation .slick-next'),
	});

	$('.posts-slider-2').slick({
		slidesToShow: 1,
		variableWidth: true,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: $('.posts-slider-wrap-2 .slider-navigation .slick-prev'),
		nextArrow: $('.posts-slider-wrap-2 .slider-navigation .slick-next'),
	});

	$('.programs-slider').slick({
		slidesToShow: 1,
		variableWidth: true,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: $('.programs-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.programs-slider-wrap .slider-navigation .slick-next'),
	});

	var handle = $("#custom-handle");
	$("#slider").slider({
		step: 10000,
		max: 250000,
		range: "min",
		create: function () {
			handle.find("span").text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle.find("span").text(ui.value);
		}
	});

	var timeHandle = $(".time-slider-wrap p");
	$("#time-slider").slider({
		step: 1,
		max: 60,
		range: "min",
		create: function () {
			timeHandle.find("span").text($(this).slider("value"));
		},
		slide: function (event, ui) {
			timeHandle.find("span").text(ui.value);
		}
	});

	var timeHandle1 = $(".time-slider-wrap p");
	$("#time-slider1").slider({
		step: 1,
		max: 60,
		range: "min",
		create: function () {
			timeHandle1.find("span").text($(this).slider("value"));
		},
		slide: function (event, ui) {
			timeHandle1.find("span").text(ui.value);
		}
	});



	$("#slider-range-max").slider({
		range: "max",
		min: 1,
		max: 10,
		value: 2,
		slide: function (event, ui) {
			$("#amount").val(ui.value);
		}
	});

	$("#amount").val($("#slider-range-max").slider("value"));


	var weightHandle = $(".weight-wrap p");
	$("#weight-slider").slider({
		step: 1,
		max: 150,
		range: "min",
		create: function () {
			weightHandle.find("span").text($(this).slider("value"));
		},
		slide: function (event, ui) {
			weightHandle.find("span").text(ui.value);
		}
	});

	var growthHandle = $(".growth-wrap p");
	$("#growth-slider").slider({
		step: 1,
		max: 220,
		range: "min",
		create: function () {
			growthHandle.find("span").text($(this).slider("value"));
		},
		slide: function (event, ui) {
			growthHandle.find("span").text(ui.value);
		}
	});

	var ageHandle = $(".age-wrap p");
	$("#age-slider").slider({
		step: 1,
		max: 100,
		range: "min",
		create: function () {
			ageHandle.find("span").text($(this).slider("value"));
		},
		slide: function (event, ui) {
			ageHandle.find("span").text(ui.value);
		}
	});

	$('.profile-top ul li a').smoothScroll({
		speed: 600,
	});


	$('.training-steps-slider').slick({
		infinite: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		customPaging: function (slider, i) {
			return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
		},
		appendDots: $('.training-steps-slider-wrap .slider-dots-wrap')
	});

	$(".training-steps-slider .next").click(function (e) {
		$(".training-steps-slider").slick('slickNext');
	});



	$(".drop-menu").on("click", function (e) {
		$(".mobile-menu-wrap").addClass("translate");
		$("body").addClass("overflow");
	});

	$(".mobile-menu-wrap .close-menu").on("click", function (e) {
		$(".mobile-menu-wrap").removeClass("translate");
		$("body").removeClass("overflow");
	});

	$('.popup').magnificPopup({
		type: 'inline',
		preloader: false,
		fixedContentPos: true,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true
	});


	$.fn.BeerSlider = function (options) {
		options = options || {};
		return this.each(function () {
			new BeerSlider(this, options);
		});
	};

	$(".beer-slider").each(function (index, el) {
		$(el).BeerSlider({
			start: $(el).data("start")
		})
	});


	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		},
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
	});

	$('.popup-gallery-2').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		},
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
	});

	$(".filter-button").on("click", function (e) {
		e.preventDefault();
		$('.filter-sidebar').addClass("translate");
		$("body").addClass("overlay");
	});

	$(".filter-sidebar .filter-close").on("click", function (e) {
		e.preventDefault();
		$('.filter-sidebar').removeClass("translate");
		$("body").removeClass("overlay");
	});


	$(window).on("resize rotate", function () {
		if ($(window).width() > 1200) {
			$('.filter-sidebar').removeClass("translate");
			$("body").removeClass("overlay");
		}
	});

	//	$(".custom-scroll").mCustomScrollbar({
	//		scrollInertia: 300,
	//		theme: "dark"
	//	});

	$(".tab-menu-left > li a").on("click", function (e) {
		e.preventDefault();
		$(".tab-menu-left > li").removeClass("active");
		$(this).closest("li").addClass("active");
		var index = $(this).closest("li").index();
		$(".tab-content-wrap .tab-content").removeClass("active");
		$(".tab-content-wrap .tab-content").eq(index).addClass("active");

		var selectedTab = $(this).closest("li").data("index");

		$("#tab-select").val(selectedTab);
		$("#tab-select").trigger('change');
	});

	$("#tab-select").on("change", function (e) {

		var selectedTab = $(this).val();
		var index = parseInt($(this).val()) - 1;

		$(".tab-menu-left > li").removeClass("active");
		$(".tab-menu-left > li").eq(index).addClass("active");
		$(".tab-content-wrap .tab-content").removeClass("active");
		$(".tab-content-wrap .tab-content").eq(index).addClass("active");
	});


	$(".tab-menu-right > li a").on("click", function (e) {
		e.preventDefault();
		var activeTab = $(this).data("name");
		$(".tab-menu-right > li").removeClass("active");
		$(this).closest("li").addClass("active");
		$(".tab-content-wrap").attr('class', 'tab-content-wrap ' + activeTab);
	});

	$(".tab-menu-popup > li a").on("click", function (e) {
		e.preventDefault();
		$(".tab-menu-popup > li").removeClass("active");
		$(this).closest("li").addClass("active");
		var index = $(this).closest("li").index();
		$(".tab-content-wrap-popup .tab-content").removeClass("active");
		$(".tab-content-wrap-popup .tab-content").eq(index).addClass("active");
	});

	$(".list > li .checkbox-wrap2 input[type='checkbox']").on("change", function () {
		var checkedCount = $(".list > li .checkbox-wrap2 input[type='checkbox']:checked").length;

			console.log($(window).width())
		if ($(window).width() >= 768) {
			if (checkedCount >= 2) {
				if (!$(".tab-content .top-list").hasClass("hidden")) {
					$(".tab-content .top-list").addClass("hidden");
					$(".mass-actions").addClass("shown");
				}
			} else {
				if ($(".mass-actions").hasClass("shown")) {
					$(".tab-content .top-list").removeClass("hidden");
					$(".mass-actions").removeClass("shown");
				}
			}
		} else {
			if (checkedCount >= 2) {
				$(".mass-actions-mobile").show();
			} else {
				$(".mass-actions-mobile").hide();
			}
		}
	});



	$(document).on("click", function () {
		$(".hide-list").removeClass("open");
	});

	$(".mass-actions > a").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".hide-list").addClass("open");

	});

	$(".hide-list").on("click", function (e) {
		e.stopPropagation();
	});

	$(document).on("click", function () {
		$(".tag-hide-block").removeClass("open");
		$("body").removeClass("overlay");
	});

	$(".tag-btn").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		if($(window).width() <= 767){
			$("body").addClass("overlay");	
		}
		$(".tag-hide-block").addClass("open");
	});

	$(".tag-hide-block").on("click", function (e) {
		e.stopPropagation();
	});

	$(".tag-wrapper > a").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		if($(window).width() <= 767){
			$("body").addClass("overlay");	
		}
		$(this).closest(".tag-wrapper").find(".tag-block1").addClass("open");
	});

	$(document).on("click", function () {
		$(".tag-block1").removeClass("open");
		$("body").removeClass("overlay");	
	});

	$(".tag-block1").on("click", function (e) {
		e.stopPropagation();
	});



	$(".tag-block1 .add-wrap > a").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).closest(".tag-block1").removeClass("open");
		$(this).closest(".tag-wrapper").find(".tag-block2").addClass("open");
	});

	$(document).on("click", function () {
		$(".tag-block2").removeClass("open");
	});

	$(".tag-block2").on("click", function (e) {
		e.stopPropagation();
	});

	$(".tag-block2 .add-wrap > a").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).closest(".tag-block2").removeClass("open");
		$(this).closest(".tag-wrapper").find(".tag-block3").addClass("open");
	});

	$(document).on("click", function () {
		$(".tag-block3").removeClass("open");
	});

	$(".tag-block3").on("click", function (e) {
		e.stopPropagation();
	});

	$(".mass-actions-mobile .block-1 .blue-btn").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).closest(".block-1").hide();
		$(".block-2").addClass("open");
	});
	
	$(document).on("click", function () {
		$(".block-2").removeClass("open");
	});
	
		$(".block-2").on("click", function (e) {
		e.stopPropagation();
	});






});
