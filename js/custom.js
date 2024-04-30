
function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}
preloadImages(["img/plismun19_a_notext.png"]);

(function($) {




    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            // event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    window.onload = function() {
      // Set the scroll speed and interval (in milliseconds)
      var scrollSpeed = 200; // Adjust the speed as needed
      var scrollInterval = 50; // Adjust the interval as needed
    
      // Get the scroll container element
      var scrollContainer = document.getElementById('scrollContainer');
    
      // Define the scroll function
      function scroll() {
        scrollContainer.scrollLeft += scrollSpeed;
      }
    
      // Start scrolling
      var scrollIntervalId = setInterval(scroll, scrollInterval);
    
      // Pause scrolling when hovering over the container
      scrollContainer.addEventListener('mouseenter', function() {
        clearInterval(scrollIntervalId);
      });
    
      // Resume scrolling when mouse leaves the container
      scrollContainer.addEventListener('mouseleave', function() {
        scrollIntervalId = setInterval(scroll, scrollInterval);
      });
    };


    new WOW().init();

    jQuery(window).load(function() {
        jQuery("#preloader").delay(400).fadeOut("medium");
        jQuery("#load").delay(400).fadeOut("medium");
    });


    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {

    $('.navbar-nav li a').on('click', function(event) {

      if ($(this).is('a:not([href^="#"])') || $(this).attr("href") == '#') {
        return;
      }
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      // event.preventDefault();
    });

    $('.page-scroll a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      // event.preventDefault();
    });

  });

	var navMain = $(".navbar-collapse");
	navMain.on("click", "a:not([data-toggle])", null, function () {
	   navMain.collapse('hide');
	});

})(jQuery);

