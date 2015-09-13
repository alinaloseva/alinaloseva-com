$(function() {
    var $popup;

    $('body').on('click', '.grid-item', function() {
        var url = $($(this).data('image-url')).text();
        var prevPost = $(this).data('prev-post');
        var nextPost = $(this).data('next-post');
        console.log(url);
        if (url.length > 0) {
            $popup = $(
                '<div id="project-view">'+
                    '<div class="project__close-container">'+
                        '<a href="#" class="project__close-button" />' +
                    '</div>' +
                    '<div class="project__arrow-container">'+
                        '<a href="#" data-prev-post="'+ prevPost +'" class="project__arrow-prev">'+
                        '<a href="#" data-next-post="'+ nextPost + '" class="project__arrow-next">'+
                    '</div>' + 
                    '<img src="'+url+'" />' +
                '</div>'
            );
            $('body').append($popup);

        }
    });

    $('body').on('click', '.project__close-button', function(event) {
        //event.preventDefault();
        //$('body'),remove($popup);
        //$popup.remove();
    });

    $('body').on('click', '.project__arrow-next', function(event) {
        //event.preventDefault();
        //alert('next cli');

        //var that = this;
        //var $next_post = $('.grid-item').filter(function() { 
              //return $(this).data("id") == $(that).data('next-post'); 
        //});

        //console.log($next_post);
        //console.log($next_post.data('image-url'));
        //console.log($next_post);
        //console.log($($next_post.data('image-url')).text());
        //alert($next_post.data('image-url'));
        //$popup.find('img').attr('src', $($next_post.data('image-url')).text());

    });

    $('body').on('click', '.project__arrow-prev', function(event) {
        //event.preventDefault();
        //alert('prev cli');

        //var that = this;
        //alert($(that).data('prev-post'));
        //var $next_post = $('.grid-item').filter(function() { 
              //return $(this).data("id") == $(that).data('prev-post'); 
        //});

        //console.log($next_post);
        //console.log($next_post.data('image-url'));
        //console.log($next_post);
        //console.log($($next_post.data('image-url')).text());
        //alert($next_post.data('image-url'));
        //$popup.find('img').attr('src', $($next_post.data('image-url')).text());

    });
});

