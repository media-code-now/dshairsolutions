"user strict";

$('.testimonial-wrapper').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      500:{
        items:1,
        nav:false,
        dots: false
    },
      767:{
          items:1,
          nav:false,
          dots: false
      },
      1199:{
          items:1,
          nav:false,
          dots: false,
          loop:false,
      }
  }
})
$('.user-slider').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  autoplay:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      500:{
        items:2,
        nav:false,
        dots: false
    },
      767:{
          items:3,
          nav:false,
          dots: false
      },
      1199:{
          items:5,
          nav:false,
          dots: false,
          loop:false,
      }
  }
})
$('.thum-wrapper').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    
  responsive:{
      0:{
          items:1,
          nav:false
      },
      500:{
        items:1,
        nav:true,
        dots: false
    },
      767:{
          items:1,
          nav:true,
          dots: false
      },
      1199:{
          items:1,
          nav:true,
          dots: false,
          loop:false,
      }
  }
})

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


  
    //------------>>Header<<----------------

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('header').addClass('header-fixed') : $('.header').removeClass('header-fixed');
        windowTop > 100 ? $('.menu__list').css('top', '80px') : $('.menu__list').css('top', '100px');
    });

    //Click Logo To Scroll To Top
    $('.header__logo').on('click', () => {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    //Smooth Scrolling Using Navigation Menu
    $('a[href*="#"]').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 700);
        e.preventDefault();
    });



    window.addEventListener('scroll', function (){
    let header = document.querySelector('header');

    header.classList.toggle('scrooling-active', window.scrollY > 250);
  })

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
    //------------>>Header<<----------------

    //------------>>Isotop<<----------------
    // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    //------------>>Isotop<<----------------

    //------------>>Magnificpopup<<----------------
    $('.g-img').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });

     $('.play').magnificPopup({
      type: 'iframe',
        iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }

            src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
          },
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
          },
          gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
          }

          // you may add here more sources

        },

        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      }
    });
    //------------>>Magnificpopup<<----------------