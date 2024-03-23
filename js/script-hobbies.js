// menu mechanism:
$('.menu-button').on('click', function(e) {
	e.preventDefault();
	$('.menu-block').toggleClass('menu_active');
	$('.header-block').toggleClass('header-block_active');
	$('.text-block').toggleClass('text-block_active');
	$('.main-text').toggleClass('main-text_active');
})

$('.close-button').on('click', function(e) {
	e.preventDefault();
	$('.menu-block').removeClass('menu_active');
	$('.header-block').removeClass('header-block_active');
	$('.text-block').removeClass('text-block_active');
	$('.main-text').removeClass('main-text_active');
})

// toggle mechanism:
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "flex") {
			content.style.display = "none";
		} else {
			content.style.display = "flex";
		}
	});
}