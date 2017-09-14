// Storage
const _header			= document.querySelectorAll("[data-el='header']")[0];
const _navObjects		= document.querySelectorAll("nav a");
const _countdown		= document.querySelectorAll("[data-el='countdown']")[0];

start();

function start() {

	countdown();
}

function countdown() {
	var now = new Date();
	var end = new Date("05/05/2018 11:59 PM");
	var distance = end - now;
	if (distance < 0) {

		_countdown.innerHTML = "0";
		return;
	}
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));

	_countdown.innerHTML = days;
}

$(document).ready(function() {
	$(".nav-main a").bind("click",function(event) {

			var $anchor = $(this);

			$("html, body").stop().animate({
				scrollTop: $($anchor.attr("href")).offset().top - 20
			}, 300,"easeInOutCirc");

			event.preventDefault();
		});
  });
