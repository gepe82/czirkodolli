$(document).ready(function(){
    $("#accordion")
        .css({
            'margin': '10px 10px 10px 15px',
            'font-size': '1em'
        })
            .accordion({
            heightStyle: 'content',
            collapsible: true,
            active: false
        });
});
