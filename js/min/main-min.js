// Storage
const _header			= document.querySelectorAll("[data-el='header']")[0];
const _navObjects		= document.querySelectorAll("[data-nav-sticky]");
const _countdown		= document.querySelectorAll("[data-el='countdown']")[0];

// Variables
let _flagIsSticky		= false;

// Constants
const BASE_UNIT			= 8;

// "Constants"
let SCREEN_WIDTH		= window.innerWidth;
let SCREEN_HEIGHT		= window.innerHeight;


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

/*
 * INPUT - on input scroll
 */
window.addEventListener("scroll", (pEvent) => {
	if(!_header || !_navObjects) { return; }

	// Sets whether nav bar is in sticky mode or not
	let tHasChanged		= false;
	let tScrollTop		= pEvent.target.scrollingElement.scrollTop;
	let tHeaderHeight	= _header.clientHeight + BASE_UNIT;

	if(!_flagIsSticky && tScrollTop > tHeaderHeight) {
		_flagIsSticky	= true;
		tHasChanged		= true;
	} else if(_flagIsSticky && tScrollTop <= tHeaderHeight) {
		_flagIsSticky	= false;
		tHasChanged		= true;
	};

	if(tHasChanged) {
		_navObjects.forEach(iNavObject => {
			iNavObject.setAttribute("data-nav-sticky", "" + _flagIsSticky);
		});
	}
}, { "passive": true });

