
$('#video_player_box').on('mouseleave', function (e) {
  e.preventDefault();
  
  $('#controls_wrap').hide(); 

});

$('#video_player_box').on('mouseenter', function (e) {
  e.preventDefault();
  
  $('#controls_wrap').show(); 

});

