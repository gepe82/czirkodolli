$(document).ready(function(){
    // Ez azért kell bele, mert a forgás miatt 1-2 böngésző nem akarja aktiválni a linket
    $('nav li a').on('click', function(e){
        e.target.click();
    });
    
    var contents = ['czirko', 'dolli', 'office', 'english', 'hu', '.', '@', '-'];
    var order = [0, 1, 6, 2, 7, 3, 5, 4];
    var em = '';
    $.each(order, function(i, value){
        em += contents[order[i]];
        });    
    $('#email').attr('href', 'mailto:' + em).text(em).attr('title', '');
});