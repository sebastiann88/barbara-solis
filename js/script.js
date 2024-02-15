$(document).ready(function() {
  //images loaded
  const $grid = $('.grid');
  $grid.imagesLoaded(function () {
      $grid.isotope({
          itemSelector: '.element-item',
          layoutMode: 'packery'
      });
  });

  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $(".btn").click(function () {
      $(".btn").removeClass("active");
      // $(".tab").addClass("active"); // instead of this do the below 
      $(this).addClass("active");   
  });

  if ( jQuery().hoverdir ) {
        jQuery( 'a.portfolio-piece:hover div.portfolio-item' ).each( function() {
          jQuery( this ).hoverdir();
      } );
    } // /hoverdir

  // Initialization for ES Users –– Navigation Menu
  const sidenav = document.getElementById('full-screen-example');
  const sidenavInstance = mdb.Sidenav.getInstance(sidenav);

  let innerWidth = null;

  const setMode = (e) => {
    // Check necessary for Android devices
    if (window.innerWidth === innerWidth) {
      return;
    }

    innerWidth = window.innerWidth;

    if (window.innerWidth < 1860) {
      sidenavInstance.changeMode('over');
      sidenavInstance.hide();
    } else {
      sidenavInstance.changeMode('side');
      sidenavInstance.show();
    }
  };

  setMode();

  // Event listeners
  window.addEventListener('resize', setMode);
});