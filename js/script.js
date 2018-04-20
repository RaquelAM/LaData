$(document).ready(function(){
	$("#imgArrows").hide();	
	$("#first-title").on("click", function(){
		$("#info-banner").toggleClass("open");
	});
	$("#sub-menu-icon").find("img").on("click", function() {
		$(".sub-menu-opts").toggleClass("open");
		$(".up").toggle();
		$(".down").toggle();
	});
	//Animation sub-meu
	$(window).scroll(function(){
		if ($(document).scrollTop() >= 70) {
			$("#sub-menu").addClass("fixed");
		}else{
			$("#sub-menu").removeClass("fixed");	
		}
	});
	//Animation scroll image
	var imgH = $('#scrollContainer').height() / 2;
	
	var func = '';
	var cont = 0;
	var contBig = 0;
	$('#scrollContainer').mouseover(function(){
		$("#imgArrows").show();	
	});
	$('#scrollContainer').mouseout(function() {
		$("#imgArrows").hide();	
	});

	$('#imgArrows').mouseover(function(e){
		if (e.clientY < imgH) {
        	clearInterval(func);
		    func =  setInterval(function() {
			   cont++;
			   contBig = cont * 10;
			   $("#imgToScroll").css("top", contBig + "px");
			}, 100)
	    } else {
        	clearInterval(func);
	        func =  setInterval(function() {
			   cont--;
			   contBig = cont * 10;
			   $("#imgToScroll").css("top", contBig + "px");
			}, 100)
	    }
		
	});
    $('#imgArrows').mouseout(function() {
        clearInterval(func);
	});
})