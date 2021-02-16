$(document).ready(function() {
  $('a[href="#top"]').click(function(){
    $('.main-content').animate({ scrollTop: 0 }, 'slow');
  });
});
