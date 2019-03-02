$(document).ready(function () {
  svg4everybody({});
	
	// header
	var headerBg = document.querySelector('.main-header__bg'),
			headerBgHeight = 0;
	
	window.addEventListener('scroll', headerBgScroll, false);
	
	function headerBgScroll() {
		if (window.scrollY > 1) {
			headerBgHeight = (window.scrollY / 8);
			if (headerBgHeight >= 82 ) {
				headerBgHeight = 82;
			}
		}
		headerBg.style.height = headerBgHeight + 'px';
	};
	
	// main-slider
	var interleaveOffset = 0.7;

	var swiperOptions = {
		loop: true,
		speed: 1000,
		watchSlidesProgress: true,
		mousewheelControl: true,
		keyboardControl: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		on: {
			progress: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * interleaveOffset;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".slide-inner").style.transform =
						"translate3d(" + innerTranslate + "px, 0, 0)";
				}      
			},
			touchStart: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition: function(speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide-inner").style.transition =
						speed + "ms";
				}
			}
		}
	};

	var swiperMain = new Swiper(".main-slider", swiperOptions);
	
	$(".section-header").animated();
	$(".main-products").animated();
	$(".main-cooperation").animated();
	$(".main-blog__list").animated();
	$(".main-blog").animated();
	
});