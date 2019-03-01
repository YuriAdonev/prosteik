(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass("animated");
				};
				if (dir === "up") {
					ths.removeClass("animated");
				}
			}, {
				offset: "80%"
			});

		});
	};
})(jQuery);