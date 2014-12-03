 $(document).ready(function(){
  $('.bxslider').bxSlider({
  auto: true,
  autoControls: true
});
             var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });
 $("a.innerMenu").mouseenter(function(){ 
     $('ul.subMenu').show(); 
   }); 
 $(".subMenu").mouseleave(function(){
       $('ul.subMenu').hide(); 
 });
  $(".menuIcon").click(function(){
    $(".mobileNav").toggle();
 });
    });

