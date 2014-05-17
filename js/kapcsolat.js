$(document).ready(function(){
    //$('#email').bind('click focus', function(e){
            var contents = ['czirko', 'dolli', 'office', 'english', 'hu', '.', '@', '-'];
            var order = [0, 1, 6, 2, 7, 3, 5, 4];
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