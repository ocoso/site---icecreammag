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

// Smooth scroll
var mq = window.matchMedia('all and (max-width: 767px)');
if(mq.matches) {
    // the width of browser is more then 700px
} else {
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
  // Issue-1
  $(function() {
      var e = $("#issue-1 .feature");
      $(window).scroll(function(noe) {
          var scroll = $(window).scrollTop();
  				var above = ($('#jump').height() + ($('#about').height()));
  				var top = (above - ($(window).height()) / 2);
          if ( scroll >= top ) {
              e.removeClass('mt-0').addClass("mt-1");
          } else {
              e.removeClass("mt-1").addClass('mt-0');
          }
      });
  });
  // About
  $(function() {
      var e = $("#about .copy");
      $(window).scroll(function(noe) {
          var scroll = $(window).scrollTop();
  				var above = ($('#jump').height());
  				var top = (above - ($(window).height()) / 2);
          if ( scroll >= top ) {
              e.removeClass('mt-0').addClass("mt-1");
          } else {
              e.removeClass("mt-1").addClass('mt-0');
          }
      });
  });
}


// Navbar
$(function () {
	$('.navbar-default').affix({
    offset: {
      top: $("#jump").height() - 1
    }
	});
})

// Jump

// pnl-a -- affix
/*$(function () {
	var vph = getDocHeight()
	$('.pnl-1 .pnl-a').affix({
    offset: {
      top: 0,
			bottom: vph - ($('#jump').height() - 90)
    }
  })
})

$(function () {
	var vph = getDocHeight()
	var jmp = ($("#jump").height() - vph);
	$('.jmp-sl-1').affix({
    offset: {
      top: 0,
      bottom: 2200
    }
  })
})*/


/*$(function() {
    var e = $("#about .feature");
    $(window).scroll(function(noe) {
        var scroll = $(window).scrollTop();
				var above = ($('#jump').height());
				var top = (above - ($(window).height()) / 2);
        if ( scroll >= top ) {
            e.removeClass('ml-0').addClass("ml-1");
        } else {
            e.removeClass("ml-1").addClass('ml-0');
        }
    });
});*/
