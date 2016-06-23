
//Show controls
$('#video_player_box').on('mouseenter', function (e) {
  e.preventDefault();
  
  $('#controls_wrap').show(); 


});

//hide controls
$('#video_player_box').on('mouseleave', function (e) {
  e.preventDefault();
  
  $('#controls_wrap').hide(); 


});



//hide seekslider_2 on mouseenter
$('#video_player_box').on('mouseenter', function (e) {
  e.preventDefault();
  
  $('#seekslider_2').hide(); 

});

//show seekslider_2 on mouseenter


$('#video_player_box').on('mouseleave', function (e) {
  e.preventDefault();
  

  $("#seekslider_2").show();

});





// $('#video_player_box').on('mouseenter', function (e) {
//   e.preventDefault();

//   $("#seekslider_2").hide();

// });






   // var el = document.getElementByClassName("controls1");                                                                                                                                                                                                             if ( el === true) {
   //  e.preventDefault();
    // if ("#seekslider:visible") {
    // $(".seekslider2").hide();
// } else {
//     $(".controls2").show();
// }

