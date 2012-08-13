
$.fn.mitchslide = function(options) {
	var slide_count;
	var slide_width;
	var wrap_width;
	var marker_width;
	var slide_track = 1;

	var defaults = {
		speed: 600,
		delay: 5000,
		progress: true,
		anystretch: true
	};
	var options = $.extend(defaults, options);
	return this.each(function() {
		var element = $(this);
		// Construct slider structure
		element.children().addClass('slide');
		element.addClass('slider');

		element.wrapInner('<div class="wrap"/>');


		// Add progress marker
		if (options.progress == true) {
			element.append('<div class="progress"><div class="marker"/></div>');
		};

		// Set var sizes and elem widths
		function config_sizes(){
			slide_count = element.find('.slide').size();
			slide_width = $(window).width();
			wrap_width = slide_width * slide_count;
			marker_width = slide_width / slide_count;
			element.find('.slide').width(slide_width);
			element.find('.wrap').width(wrap_width);
			element.find('.marker').width(marker_width);
		};
		config_sizes();
		$(window).resize(function(){
			config_sizes();
		});
		if (options.progress == true) {
			element.find('.wrap').css('left','0');
		}
		function rotate_slider(){
			if (slide_track != slide_count) {
				slide_track ++;
				element.find('.wrap').stop(false,true).animate({left:'-='+slide_width+'px'}, options.speed);
				if (options.progress == true) {
					element.find('.marker').stop(false,true).animate({left:'+='+marker_width+'px'}, options.speed);
				}
			} else {
				slide_track = 1;
				element.find('.wrap').animate({left:'0px'}, options.speed);
				if (options.progress == true) {
					element.find('.marker').animate({left:'0px'}, options.speed);
				}
			};
		}
		setInterval(function(){rotate_slider()}, options.delay);
	});
}