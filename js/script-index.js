$('.menu-button').on('click', function(e) {
  e.preventDefault();
  $('.menu-block').toggleClass('menu_active');
  $('.header-block').toggleClass('header-block_active');
  $('.text-block').toggleClass('text-block_active');
	$('.photo-wrapper').toggleClass('photo-wrapper_active');
})

$('.close-button').on('click', function(e) {
  e.preventDefault();
  $('.menu-block').removeClass('menu_active');
  $('.header-block').removeClass('header-block_active');
  $('.text-block').removeClass('text-block_active');
	$('.photo-wrapper').removeClass('photo-wrapper_active');
})