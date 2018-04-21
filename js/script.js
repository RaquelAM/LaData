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
	var imgH = "-"+$('#imgToScroll').height() / 2;
	
	var func = '';
	var cont = 0;
	var contBig = 0;
	$('#scrollContainer').mouseover(function(){
		$("#imgArrows").show();	
	});
	$('#scrollContainer').mouseout(function() {
		$("#imgArrows").hide();	
	});

	$('#up').mouseover(function(e){
        	clearInterval(func);
		    func =  setInterval(function() {
		    	if (contBig <= 0) {
		    		cont++;
				   contBig = cont * 10;
				   console.log("suma");
				   console.log(contBig);
				   $("#imgToScroll").css("top", contBig + "px");
		    	}
				   
			}, 100);
	});
    $('#up').mouseout(function() {
        clearInterval(func);
	});
	$('#down').mouseover(function(e){
        	clearInterval(func);
		    func =  setInterval(function() {
		    	if (contBig >= imgH) {
		    		cont--;
				   contBig = cont * 10;
				   console.log("resta");
				   console.log(contBig);
				   $("#imgToScroll").css("top", contBig + "px");
		    	}
				   
			}, 100);
	});
    $('#down').mouseout(function() {
        clearInterval(func);
	});
})