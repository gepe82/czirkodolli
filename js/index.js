$(document).ready(function(){
    // Ez azért kell bele, mert a forgás miatt 1-2 böngésző nem akarja aktiválni a linket
    $('nav li a').on('click', function(e){
        e.target.click();
    })
});