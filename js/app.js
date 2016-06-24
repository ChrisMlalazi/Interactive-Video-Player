
//Show controls
$('#video_player_box').on('mouseenter', function (e) {
  e.preventDefault();
  
  $('#controls_wrap').show(); 


});

// hide controls
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

