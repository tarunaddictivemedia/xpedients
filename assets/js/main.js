/***************************************************
==================== JS INDEX ======================
****************************************************
// Data Js
// Preloader Js
// Scroll To Top Js
// Mobile Menu Js
// Sticky Js
// Search Bar Js
// Fun Fact Js
// Mixit Up Js
// VenoBox Js
// Rating Js
// Skillbar Js
// Accordion Js
// Project Filter Js
// Testimonial Slider Js
// Brand Slider Js
// Project Slider Js
// Gallery Slider Js
// Roll Slider Js
// Proggess Bar Js
// Anim Js
// Services Js
// Image Reveal Animation Js
// Images Mouse Js
// Lg Title Js
// Wow Js

****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// Data Js
	$("[data-bg-image]").each(function () {
		var $this = $(this),
			$image = $this.data("bg-image");
		$this.css("background-image", "url(" + $image + ")");
	});

	////////////////////////////////////////////////////
	// Preloader Js
	$(window).on("load", function () {
		$("#preloader").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// Scroll To Top Js
	$(window).on("scroll", function () {
		var pagescroll = $(window).scrollTop();
		if (pagescroll > 500) {
			$(".scroll-to-top").addClass("scroll-to-top-visible");
		} else {
			$(".scroll-to-top").removeClass("scroll-to-top-visible");
		}
	});

	$(".scroll-to-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	////////////////////////////////////////////////////
	// Mobile Menu Js
	$(".menu_bar").on("click", function () {
		$(this).toggleClass("on");
	});

	// offcanvas
	$(".menu_bar.menu_offcanvas").on("click", function () {
		$(".tj-offcanvas-area").toggleClass("opened");
		$("body").toggleClass("overflow-hidden");
	});

	$(".offcanvas-main-menu").meanmenu({
		meanMenuContainer: ".offcanvas-menu",
		meanScreenWidth: "10000",
		meanExpand: ['<i class="fa-light fa-angle-right"></i>'],
	});

	$(".main-mobile-menu").meanmenu({
		meanMenuContainer: ".mobile_menu",
		meanScreenWidth: "991",
		meanExpand: ['<i class="fa-light fa-angle-right"></i>'],
	});

	// Hamburger Menu Js
	$(".mobile_menu_bar").on("click", function () {
		$(".hamburger-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".hamburger_close_btn").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$(".mobile_menu_bar").removeClass("on");
	});
	$(".body-overlay").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$(".mobile_menu_bar").removeClass("on");
	});

	////////////////////////////////////////////////////
	// Sticky Js
	$(window).scroll(function () {
		var Width = $(document).width();
		if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
			$(".header-sticky").addClass("sticky");
		} else {
			$(".header-sticky").removeClass("sticky");
		}
	});

	////////////////////////////////////////////////////
	// Search Bar Js
	if ($(".search").length) {
		$(".search").on("click", function () {
			$("body").addClass("search-active");
		});
		$(".close-search").on("click", function () {
			$("body").removeClass("search-active");
		});

		$(".search").on("click", function () {
			$("body").addClass("search-active");
		});
		$(".search-overly").on("click", function () {
			$("body").removeClass("search-active");
		});
	}

	////////////////////////////////////////////////////
	// Fun Fact Js
	if ($(".odometer").length > 0) {
		$(".odometer").appear(function () {
			var odo = $(".odometer");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});
	}

	////////////////////////////////////////////////////
	// Mixit Up Js
	var containerEl = document.querySelector("#porfolio_filter");
	var mixer;
	if (containerEl) {
		mixer = mixitup(containerEl, {
			animation: {
				effects: "fade scale(0.5)",
			},
		});
	}

	////////////////////////////////////////////////////
	// VenoBox Js
	if ($(".ig-gallery").length > 0) {
		new VenoBox({
			selector: ".ig-gallery",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	if ($(".video-popup").length > 0) {
		new VenoBox({
			selector: ".video-popup",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	////////////////////////////////////////////////////
	// Rating Js
	if ($(".fill-ratings span").length > 0) {
		var star_rating_width = $(".fill-ratings span").width();
		$(".star-ratings").width(star_rating_width);
	}

	////////////////////////////////////////////////////
	// Skillbar Js
	if ($(".progress_bar").length > 0) {
		$(document).ready(function () {
			progress_bar();
		});
		function progress_bar() {
			var speed = 30;
			var items = $(".progress_bar").find(".progress-item");
			items.appear(function () {
				var item = $(this).find(".progress");
				var itemValue = item.data("progress");
				var i = 0;
				var value = $(this);
				var count = setInterval(function () {
					if (i <= itemValue) {
						var iStr = i.toString();
						item.css({
							width: iStr + "%",
						});
						value.find(".item_value").html(iStr + "%");
					} else {
						clearInterval(count);
					}
					i++;
				}, speed);
			});
		}
	}

	////////////////////////////////////////////////////
	// Accordion Js
	if ($(".accordion-item").length > 0) {
		$(".accordion-item .faq-title").on("click", function () {
			if ($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active");
			} else {
				$(this).parent().siblings().removeClass("active");
				$(this).parent().addClass("active");
			}
		});
	}

	////////////////////////////////////////////////////
	// Project Filter Js
	$("#portfolio-grid").imagesLoaded(function () {
		$(".filter-menu").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({
				filter: filterValue,
			});
		});
		$(".filter-menu button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
		var $grid = $("#portfolio-grid").isotope({
			itemSelector: ".portfolio-item",
			percentPosition: true,
			masonry: {
				columnWidth: ".portfolio-item",
			},
		});
	});

	////////////////////////////////////////////////////
	// Testimonial Slider Js
	if ($(".tj-testimonial-slider").length > 0) {
		var testimonial = new Swiper(".tj-testimonial-slider", {
			slidesPerView: "auto",
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 8500,
			},
			speed: 3000,
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
		});
	}

	// Testimonial Slider Js
	if ($(".tj-testimonial-slider2").length > 0) {
		var testimonial = new Swiper(".tj-testimonial-slider2", {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 9000,
			},
			speed: 2000,
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 2,
				},
			},
		});
	}

	// Testimonial Slider Js
	if ($(".tj-testimonial-slider3").length > 0) {
		var testimonial = new Swiper(".tj-testimonial-slider3", {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			speed: 2000,
			autoplay: {
				delay: 2000,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1.3,
				},
				768: {
					slidesPerView: 1.8,
				},
				1440: {
					slidesPerView: 2.2,
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// Brand Slider Js
	if ($(".tj-brand-slider").length > 0) {
		var brand = new Swiper(".tj-brand-slider", {
			slidesPerView: 4,
			spaceBetween: 30,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 5000,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 2,
				},
				640: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 4,
				},
			},
		});
	}

	// Brand Slider Js
	if ($(".tj-brand-slider2").length > 0) {
		var brand = new Swiper(".tj-brand-slider2", {
			loop: true,
			freemode: true,
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides: true,
			allowTouchMove: false,
			speed: 3000,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 2,
				},
				640: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 5,
				},
			},
			a11y: false,
		});
	}

	// Brand Slider Js
	if ($(".tj-brand-slider3").length > 0) {
		var brand = new Swiper(".tj-brand-slider3", {
			slidesPerView: 5,
			spaceBetween: 126,
			loop: true,
			autoplay: {
				delay: 6500,
			},
			speed: 3000,
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				576: {
					slidesPerView: 3,
					spaceBetween: 50,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 50,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 50,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 50,
				},
				1024: {
					slidesPerView: 5,
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// Project Slider Js
	if ($(".tj-project-slider").length > 0) {
		var testimonial = new Swiper(".tj-project-slider", {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			speed: 2000,
			autoplay: {
				delay: 2000,
			},
			pagination: {
				el: ".project-pagination",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1.2,
				},
				992: {
					slidesPerView: 1.2,
				},
				1200: {
					slidesPerView: 1.2,
				},
				1440: {
					slidesPerView: 1.5,
				},
			},
		});
	}

	// Project Slider Js
	if ($(".tj-project-slider2").length > 0) {
		var project = new Swiper(".tj-project-slider2", {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 6000,
			},
			speed: 3000,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// Gallery Slider Js
	if ($(".tj-gallery-slider").length > 0) {
		var swiper = new Swiper(".tj-gallery-slider", {
			slidesPerView: 5,
			spaceBetween: 30,
			loop: false,
			breakpoints: {
				320: {
					slidesPerView: 3,
				},
				576: {
					slidesPerView: 3,
				},
				640: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1024: {
					slidesPerView: 5,
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// Roll Slider Js
	if ($(".tj-roll-slider-one").length > 0) {
		var roll = new Swiper(".tj-roll-slider-one", {
			slidesPerView: "auto",
			spaceBetween: 30,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 5000,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}

	// Roll Slider Js
	if ($(".tj-roll-slider-two").length > 0) {
		var swiper = new Swiper(".tj-roll-slider-two", {
			slidesPerView: "auto",
			spaceBetween: 30,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 5000,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}

	////////////////////////////////////////////////////
	// Blog Slider Js
	if ($(".blog-standard-slider").length > 0) {
		var blog = new Swiper(".blog-standard-slider", {
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 8500,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
		});
	}

	////////////////////////////////////////////////////
	// Proggess Bar Js
	if (typeof $.fn.knob != "undefined") {
		$(".knob").each(function () {
			var $this = $(this),
				knobVal = $this.attr("data-rel");

			$this.knob({
				draw: function () {
					$(this.i).val(this.cv + "%");
				},
			});

			$this.appear(
				function () {
					$({
						value: 0,
					}).animate(
						{
							value: knobVal,
						},
						{
							duration: 2000,
							easing: "swing",
							step: function () {
								$this.val(Math.ceil(this.value)).trigger("change");
							},
						}
					);
				},
				{
					accX: 0,
					accY: -150,
				}
			);
		});
	}

	/*****************************************************************
================================= GSAP ====================================
********************************************************************/

	gsap.registerPlugin(ScrollTrigger, TweenMax, ScrollToPlugin);

	gsap.config({
		nullTargetWarn: false,
	});

	/*
	============================== Lenis Scroll Js =====================================
	*/
	const lenis = new Lenis();
	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add(time => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	////////////////////////////////////////////////////
	// Anim Js
	const target = document.getElementById("anim");
	function splitTextToSpans(targetElement) {
		if (targetElement) {
			const text = targetElement.textContent;
			targetElement.innerHTML = "";
			for (let character of text) {
				const span = document.createElement("span");
				if (character === " ") {
					span.innerHTML = "&nbsp;";
				} else {
					span.textContent = character;
				}
				targetElement.appendChild(span);
			}
		}
	}
	splitTextToSpans(target);

	////////////////////////////////////////////////////
	// Services Js
	var windowSize = $(window).width();
	$(window).on("load", function () {
		if (windowSize > 991) {
			// Stacking Cards Js
			const cards = document.querySelectorAll(".stack-item");
			const stickySpace = document.querySelector(".stack-offset");
			const animation = gsap.timeline();
			let cardHeight;
			if (document.querySelector(".stack-item")) {
				function initCards() {
					animation.clear();
					cardHeight = cards[0].offsetHeight;
					//console.log("initCards()", cardHeight);
					cards.forEach((card, index) => {
						if (index > 0) {
							gsap.set(card, { y: index * cardHeight });
							animation.to(
								card,
								{ y: 0, duration: index * 0.5, ease: "none" },
								0
							);
						}
					});
				}
				initCards();
				ScrollTrigger.create({
					trigger: ".stack-wrapper",
					start: "top top",
					pin: true,
					end: () =>
						`+=${cards.length * cardHeight + stickySpace.offsetHeight}`,
					scrub: true,
					animation: animation,
					// markers: true,
					invalidateOnRefresh: true,
				});
				ScrollTrigger.addEventListener("refreshInit", initCards);
			}
		}
	});

	////////////////////////////////////////////////////
	// Image Reveal Animation Js
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.9,
	};

	let revealCallback = (entries, self) => {
		entries.forEach(entry => {
			let container = entry.target;
			let img = entry.target.querySelector("img");
			const easeInOut = "power3.out";
			const revealAnim = gsap.timeline({ ease: easeInOut });

			if (entry.isIntersecting) {
				revealAnim.set(container, {
					visibility: "visible",
				});
				revealAnim.fromTo(
					container,
					{
						clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
						webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
					},
					{
						clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
						webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
						duration: 1,
						ease: easeInOut,
					}
				);
				revealAnim.from(img, 4, {
					scale: 1.4,
					ease: easeInOut,
					delay: -1,
				});
				self.unobserve(entry.target);
			}
		});
	};

	let revealObserver = new IntersectionObserver(revealCallback, options);

	document.querySelectorAll(".reveal-image-anim").forEach(reveal => {
		revealObserver.observe(reveal);
	});

	////////////////////////////////////////////////////
	// Images Mouse Js
	var hoverBtns = gsap.utils.toArray(".images_hover");

	const hoverBtnItem = gsap.utils.toArray(".hover-effect");
	hoverBtns.forEach((btn, i) => {
		$(btn).mousemove(function (e) {
			callParallax(e);
		});
		function callParallax(e) {
			parallaxIt(e, hoverBtnItem[i], 60);
		}

		function parallaxIt(e, target, movement) {
			var $this = $(btn);
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			gsap.to(target, 1, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
				ease: Power2.easeOut,
			});
		}
		$(btn).mouseleave(function (e) {
			gsap.to(hoverBtnItem[i], 1, {
				x: 0,
				y: 0,
				ease: Power2.easeOut,
			});
		});
	});

	////////////////////////////////////////////////////
	// Lg Title Js
	if ($(".footer-big-text").length > 0) {
		let cta = gsap.timeline({
			repeat: -1,
			delay: 0.5,
			scrollTrigger: {
				trigger: ".footer-big-text",
				start: "bottom 100%-=50px",
			},
		});
		gsap.set(".footer-big-text", {
			opacity: 0,
		});
		gsap.to(".footer-big-text", {
			opacity: 1,
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: ".footer-big-text",
				start: "bottom 100%-=50px",
				once: true,
			},
		});

		let mySplitText = new SplitText(".footer-big-text", {
			type: "words,chars",
		});
		let chars = mySplitText.chars;
		let endGradient = chroma.scale(["#FFF", "#FFF", "#FFF", "#FFF", "#FFF"]);
		cta.to(chars, {
			duration: 0.5,
			scaleY: 0.6,
			ease: "power1.out",
			stagger: 0.04,
			transformOrigin: "center bottom",
		});
		cta.to(
			chars,
			{
				yPercent: -20,
				ease: "elastic",
				stagger: 0.03,
				duration: 0.8,
			},
			0.5
		);
		cta.to(
			chars,
			{
				scaleY: 1,
				ease: "elastic.out",
				stagger: 0.03,
				duration: 1.5,
			},
			0.5
		);
		cta.to(
			chars,
			{
				color: (i, el, arr) => {
					return endGradient(i / arr.length).hex();
				},
				ease: "power1.out",
				stagger: 0.03,
				duration: 0.3,
			},
			0.5
		);
		cta.to(
			chars,
			{
				yPercent: 0,
				ease: "back",
				stagger: 0.03,
				duration: 0.8,
			},
			0.7
		);
		cta.to(chars, {
			color: "#fff",
			duration: 1.4,
			stagger: 0.05,
		});
	}

	////////////////////////////////////////////////////
	// Wow Js
	$(window).on("load", function () {
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 0, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();
	});
})(jQuery);
