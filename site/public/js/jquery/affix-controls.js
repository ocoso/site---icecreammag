$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
// Navbar
$(function () {
	$('.navbar-default').affix({
    offset: {
      top: $("#jump").height()
    }
	});
})
// Jump
$(function () {
	var vph = getDocHeight()
	var jmp = ($("#jump").height() - vph);
	$('.jmp-sl-1').affix({
    offset: {
      top: 0,
      bottom: 2200
    }
  })
})


$(document).ready(function() {
	var isDesktop = (function() {
		return !('ontouchstart' in window) // works on most browsers
		|| !('onmsgesturechange' in window); // works on ie10
		})();
		//edit, if you want to use this variable outside of this closure, or later use this:
		window.isDesktop = isDesktop;
	 	if( isDesktop ){ /* desktop things */
			$(function() {
			  $('a[href*="#"]:not([href="#"])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html, body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
			  });
			});
		}
});
