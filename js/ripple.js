function ripplesEverywhere() {

	(function(window, $) {
	  $(function() {
			$('.btn').on('click', function(event) {
	      var $div = $('<div/>'),
	        btnOffset = $(this).offset(),
	        xPos = event.pageX - btnOffset.left,
	        yPos = event.pageY - btnOffset.top;

	      $div.addClass('ripple-effect');
	      var $ripple = $('.ripple-effect');

	      $ripple.css('height', $(this).height());
	      $ripple.css('width', $(this).height());
	      $div
	        .css({
	          top: yPos - ($ripple.height() / 2),
	          left: xPos - ($ripple.width() / 2),
	          background: $(this).data('ripple-color')
	        })
	        .appendTo($(this));

	      window.setTimeout(function() {
	        $div.remove();
	      }, 2000);
	    });

			$('.nav a').on('click', function(event) {
				var $div = $('<div/>'),
					btnOffset = $(this).offset(),
					xPos = event.pageX - btnOffset.left,
					yPos = event.pageY - btnOffset.top;

				$div.addClass('ripple-effect');
				var $ripple = $('.ripple-effect');

				$ripple.css('height', $(this).height());
				$ripple.css('width', $(this).height());
				$div
					.css({
						top: yPos - ($ripple.height() / 2),
						left: xPos - ($ripple.width() / 2),
						background: $(this).data('ripple-color')
					})
					.appendTo($(this));

				window.setTimeout(function() {
					$div.remove();
				}, 2000);
			});

	  });

	})(window, jQuery);
}

/* Fire up MDL in doc load and a modal */
(function ripplesGoPower(){
	'use strict';
		console.info("ripplesGoPower()");
	$(document).ready(function ripplesOnDocumentReady() {
			console.info("calling on document ready");
	  ripplesEverywhere();
	});

	$(".modal[role='dialog']").on('loaded.bs.modal', function ripplesOnModal() {
			console.info("calling on a modal loaded");
		ripplesEverywhere();
	})
})();
