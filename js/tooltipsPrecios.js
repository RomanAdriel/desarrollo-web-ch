$(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger : 'click'})
    setInterval(function () {
        $('[data-toggle="tooltip"]').tooltip('hide'); 
   }, 3000);
    });

