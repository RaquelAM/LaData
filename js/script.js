$(document).ready(function(){
	$("#first-title").on("click", function(){
		$("#info-banner").toggleClass("open");
	});
	$("#sub-menu-icon").find("img").on("click", function() {
		$(".sub-menu-opts").toggleClass("open");
		$(".up").toggle();
		$(".down").toggle();
	})
})