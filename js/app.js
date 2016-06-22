$('.controls_wrap').on('mouseover', function (e) {
  e.preventDefault();
  $(this).toggleClass('navicon--active');
  $('.toggle').toggleClass('toggle--active');
});


// $('.navicon').on('click', function (e) {
//   e.preventDefault();
  
//   $('.sentence').toggle();  
//   $('.white').toggle();
//   $('.picture').toggle(); 
//   $('.motto1').toggle();
  

// });