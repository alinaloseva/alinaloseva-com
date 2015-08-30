$(function() {
    var $grid = $('.grid').imagesLoaded( function() {
        $grid.isotope({
            layoutMode: 'packery',
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    });
});
