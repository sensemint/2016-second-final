$(document).ready(function(){

//Navagation - toggle
  $('#musicCategory').on('click', '.toggleTarget', function(toggleEvent){
      toggleEvent.preventDefault();
      $(this).next().toggle();
  });


//carousel
  var $carouselBlock = $('#carouselBlock');
  var success = true;

  $('#leftBtn').on('click', carousel);
  $('#rightBtn').on('click', carousel);

  function carousel(){
      if(success === true){
        // console.log("hit");
          $carouselBlock.animate({marginLeft:-1200}, 1200);
          success = false;
      } else {
        // console.log("hif");
          $carouselBlock.animate({marginLeft:0}, 1200);
          success = true;
      }
  }


});
