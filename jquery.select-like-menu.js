/**
 * jQuery select-like menu plugin
 * ------------------------------
 * Makes <ul> lists look like dropdown select
 *
 * Usage:
 * $('ul#menu').selectMenu();
 *
 * Available options (defaults set):
 *
 * {
 *	placeholder: '<div class="menu-placeholder">',
 *	activeSelector: '.active'
 * }
 *
 * @version 1.0
 * @author  kesspess
 * @date    5. 5. 2012
 */
(function ($) {

$.fn.extend({
	selectMenu: function (o) {
		var $this = $(this),
			options = $.extend({
				placeholder: '<div class="menu-placeholder">',
				activeSelector: '.active'
			}, o);

		var $active = $this.children( options.activeSelector ).first(),
			$placeholder = $(options.placeholder).html($active.clone().html()),
			over = function () { $this.show(); },
			out = function () { $this.hide(); };

		console.log($placeholder);
		$placeholder.children().first().hover(over, out);
		$this.hover(over, out).css('position', 'absolute').before( $placeholder ).hide();
		return $this;
	}
});

})(jQuery);