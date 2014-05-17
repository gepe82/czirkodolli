$(document).ready(function(){
    //$('#email').bind('click focus', function(e){
            var contents = ['czirko', 'dolli', 'gmail', 'com', '.', '@'];
            var order = [0, 4, 1, 5, 2, 4, 3];
            var em = '';
            $.each(order, function(i, value){
                em += contents[order[i]];
                });
            //if( $(this).attr('href') == '#' ){
                //e.preventDefault();
                //$('#email').fadeOut('slow').attr('href', 'mailto:' + em).text(em).attr('title', '').fadeIn('slow');
                $('#email').attr('href', 'mailto:' + em).text(em).attr('title', '');
            //}
        //});
    });