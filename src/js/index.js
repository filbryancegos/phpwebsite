var headerInfo = document.querySelector('.header-info');
var dotsList = headerInfo.querySelectorAll('.dots-indicators li');
var dots = Array.from(dotsList);

var tip = document.querySelector('.info-basic-tooltip');
var show = true;

function toogleTip(e) {
	console.log(e.type);
	if (show) {
		tip.style.display = 'block';
		show = false;
	} else {
		tip.style.display = 'none';
		show = true;
	}
}

dotsList.forEach(function(items) {
	items.addEventListener('click' ,toogleTip);
})


function handleclick(e) {
	// var content = document.querySelector(e.target);
	var parent = e.target.parentNode;
	var tooltip = parent.querySelector('.info-basic-tooltip');

	toggle(tooltip);

	console.log(e.target.className);
}

//dots.forEach(function(dot) { dot.addEventListener('click', handleclick); })

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
