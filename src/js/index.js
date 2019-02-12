var headerInfo = document.querySelector('.header-info');
var dotsList = headerInfo.querySelectorAll('.dots-indicators li');
var dots = Array.from(dotsList); 

function handleclick(e) {
	// var content = document.querySelector(e.target);
	var parent = e.target.parentNode;
	var tooltip = parent.querySelector('.info-basic-tooltip');

	toggle(tooltip);
}

dots.forEach(function(dot) { dot.addEventListener('click', handleclick); })

var show = function (elem) { elem.style.display = 'block'; };
var hide = function (elem) { elem.style.display = 'none'; };

var toggle = function (elem) {
	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}
	// Otherwise, show it
	show(elem);
};