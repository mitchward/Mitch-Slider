$(function(){
	var images = [
		"http://dl.dropbox.com/u/515046/www/outside.jpg",
		"http://dl.dropbox.com/u/515046/www/garfield-interior.jpg",
		"http://dl.dropbox.com/u/515046/www/cheers.jpg"
	];
	$('figure:nth-of-type(3n)').anystretch(images[0], {speed: 150});
	$('figure:nth-of-type(3n+1)').anystretch(images[1], {speed: 150});
	$('figure:nth-of-type(3n+2)').anystretch(images[2], {speed: 150});

	$('#slide-1').mitchslide({
		speed: 1000,
		delay: 5000,
		progress: true
	});
	$('#slide-2').mitchslide({
		speed: 500,
		delay: 2000,
		progress: false
	});
});