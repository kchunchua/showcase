//Navbar Control
	var mynav = document.getElementById('navbar');
	var openMenu = document.getElementById('menuOpen');
	openMenu.addEventListener('click', function (e) {
		mynav.classList.toggle('menu-slide');
		e.stopPropagation();
	});
	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
	});
	// Hide menu when nav item clicked//
	$('.menu a').on("click", function () {
		$('#menuOpen').click();
		$('#nav-icon').toggleClass('open');
	});




//Rotate Plus //
$(".rotate").click(function () {
	$(this).toggleClass("down");
});

//Myself Icon
var myself = bodymovin.loadAnimation({
	container: document.getElementById('myself'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	hideOnTransparent: true,
	path: 'images/avatar/myself.json'
})

$('#myself-tab').click(function () {
	myself.playSegments([0, 50], true);
});

//Education Icon
var edu = bodymovin.loadAnimation({
	container: document.getElementById('edu'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	hideOnTransparent: true,
	path: 'images/avatar/edu.json'
})

$('#edu-tab').click(function () {
	edu.playSegments([0, 50], true);
});

// Goal Icon
var goal = bodymovin.loadAnimation({
	container: document.getElementById('goal'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	hideOnTransparent: true,
	path: 'images/avatar/goal.json'
})

$('#goal-tab').click(function () {
	goal.playSegments([0, 50], true);
});

//RingMe Icon
// var ringme = bodymovin.loadAnimation({
// 	container: document.getElementById('ringme'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: true,
// 	hideOnTransparent: true,
// 	path: '../images/app/ring.json'
// })

// ringme.play();

//Smooth Scrolling
// Add smooth scrolling to all links
	$("nav a").on('click', function (event) {

		if (this.hash !== "") {
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		} // End if
	});
