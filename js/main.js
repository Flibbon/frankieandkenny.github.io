// Storage
const _header			= document.querySelectorAll("[data-el='header']")[0];
const _navObjects		= document.querySelectorAll("[data-nav-sticky]");

// Variables
let _flagIsSticky		= false;

// Constants
const BASE_UNIT			= 8;

// "Constants"
let SCREEN_WIDTH		= window.innerWidth;
let SCREEN_HEIGHT		= window.innerHeight;

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