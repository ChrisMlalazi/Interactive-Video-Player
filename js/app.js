
$('#video_controls_bar').on('mouseleave', function (e) {
  e.preventDefault();
  
  $('#controls_wrap').hide(); 

});

$('#video_controls_bar').on('mouseenter', function (e) {
  e.preventDefault();
  
  $('#controls_wrap').show(); 

});

