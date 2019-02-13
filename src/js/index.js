var headerInfo = document.querySelectorAll('.header-info');
var headerInfoList = Array.from(headerInfo);

headerInfoList.forEach(function(elem) { 
	
	var dotsList = elem.querySelectorAll('.dots-indicators li');
	var dots = Array.from(dotsList); 

	dots.forEach(function(dot) { dot.addEventListener('click', handleclick); })	

	function handleclick(e) {
		
		var parent = e.target.parentNode;
		var tooltip = parent.querySelector('.info-basic-tooltip');
		console.log(tooltip)	
		
		toggle(tooltip);
	}

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
})