$(document).ready(function(){
        var szel = $(this).width();
        var pictDir = 'pict';
        $.getJSON('js/kepek.json', function(obj){
            $.each(obj, function(i, galeria){
                if ( galeria.pictures.length > 0 ){
                    $('#accordion_wojs').remove();
                    $('.js_show').show();
                    $('#accordion').append( $('<h3>', {'innerHTML':galeria.title, 'id': galeria.id } ), $('<div>').append( function(){
                        var html = [];
                        $.each(galeria.pictures, function(j, kep){
                            html += '<a href="' + pictDir + '/' + kep.src + '" rel="prettyPhoto[' + galeria.galleryName + ']"><img src="' + pictDir + '/thumb/' + kep.src + '" alt="' + kep.alt + '" title="' + kep.alt + '" /></a>';
                        });
                        return html;
                        } ) );
                }
            });
            $( "#accordion" ).css({
            'margin': '10px 10px 10px 15px',
            'box-shadow': '-1px -1px 5px 2px rgba(0, 0, 0, 0.3)'
            }).accordion({
                heightStyle: 'content',
                collapsible: true,
                active: false
                });
            if ( szel > 560 ){
                $('a[rel^="prettyPhoto"]').prettyPhoto();
            }
            /*$('#a_iroda, #a_irodahaz').click(function(e){
                //e.stopPropagation();
                $('#accordion').accordion({'active':'false'});
                $(location.hash).click();
                });*/
        });

});