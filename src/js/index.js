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


var hamburger = document.querySelector('#hamburger-icon');
var sidebar = document.querySelector('.sidebar');
var mainSection = document.querySelector('.main-section');
var navbar = document.querySelector('.navbar-brand');



function burger(e) {
	console.log(e.target);
	hamburger.classList.toggle('active');
	sidebar.classList.toggle('sidebar-active');
	mainSection.classList.toggle('sidebar-active');
	navbar.classList.toggle('sidebar-active');
	return false;
}

hamburger.addEventListener('click', burger);


 var form = document.querySelector('#form-sign-2');
 var submit = document.querySelector('#submitform');

function showAlert(message, className) {
	var div = document.createElement('div');
	div.className = 'alert' + " " + 'alert-'+className;
	div.appendChild(document.createTextNode(message));
	var container = document.querySelector('.sign-wrapper');
	var form = document.querySelector('#form-sign-in');
	container.insertBefore(div, form);

	setTimeout(function() {
		document.querySelector('.alert').remove()
	}, 3000)
}

function clearFields() {
	document.querySelector('#email').value = '';
	document.querySelector('#password').value = '';
	document.querySelector('#confirmpassword').value = '';
 }

submit.addEventListener('click', function(e) {
	e.preventDefault();
	// Get form values
	var email = document.querySelector('#email').value;
	var pass = document.querySelector('#password').value;
	var confirmpass = document.querySelector('#confirmpassword').value;

	// Validate
    if(email === '' || pass === '' || confirmpass === '') {
	  showAlert('Please fill in all fields', 'danger');
    } else {
		//form.submit();
		clearFields();
    }
})



// $('html').on('click', function(e) {
//   if (typeof $(e.target).data('form-modal') == 'undefined') {
// 	  //console.log((typeof $(e.target).data('form-modal') == 'undefined'));
//     $('.modal').hide();
// 	$('html').removeClass('modal-backdrop fade show');
//   }
// });
