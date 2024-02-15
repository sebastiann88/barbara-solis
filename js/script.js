// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$(document).ready(function() {
  $(".btn").click(function () {
      $(".btn").removeClass("active");
      // $(".tab").addClass("active"); // instead of this do the below 
      $(this).addClass("active");   
  });
  //images loaded
  const $container = $('.items');
  $container.imagesLoaded(function () {
      $container.isotope({
          itemSelector: '.item',
          layoutMode: 'packery'
      });
  });
});

if ( jQuery().hoverdir ) {
    jQuery( 'a.portfolio-piece:hover div.portfolio-item' ).each( function() {
      jQuery( this ).hoverdir();
  } );
} // /hoverdir