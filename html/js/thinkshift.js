/*
Think Shift Custom Scripts
Date Created: April 14 2014
Author: Mike Thiessen
*/

(function($) { /* Base Function Calls ---------------------------------------------------------------------------------------------- */
  /* ------------------------------------------------------------------------------------------------------------------ */
  
  var sizeVideos;

  function domIsReady() { //run functions that need to be run right away

    
  } //end: domIsReady()

  function windowIsLoaded() { //run functions that can happen after the page html has loaded

  
  } //end: windowIsLoaded()

  function windowIsResized() { //run functions that can happen when the browser window is resized
    

  } //end: windowIsResized()


  $('html').removeClass('no-js');
  $(document).ready(domIsReady);
  $(window).load(windowIsLoaded);
  window.onresize = function(event) {
    windowIsResized();
  }
  
})(jQuery);