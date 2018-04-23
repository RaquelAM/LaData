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
				   $("#imgToScroll").css("top", contBig + "px");
		    	}
				   
			}, 100);
	});
    $('#down').mouseout(function() {
        clearInterval(func);
	});
	//Toggle image
	$("#byCol").on("click", function(){
		$(".optSocial").removeClass("activeS");
		$(this).addClass("activeS");
		$("#imgMun").fadeOut(1000);
		setTimeout(function(){ $("#imgCol").fadeIn(1000); }, 1000);
	});
	$("#byMun").on("click", function(){
		$(".optSocial").removeClass("activeS");
		$(this).addClass("activeS");
		$("#imgCol").fadeOut(1000); 
		setTimeout(function(){ $("#imgMun").fadeIn(1000);}, 1000);
		
	});
	

	//Delegaciones y colonias
	$('#delSelect').change(function(){
    	var del = $(this).val();
    	$('#delCol').find('option').remove().end();
    	var newArray = data.filter(function (el) {
		  return el.del == del;
		});
		console.log(newArray); 
		$.each(newArray, function( index, value ) {
		  $("#delCol").append("<option value='"+value.image+"'>"+value.name+"</option>")
		});           
    });

    $('#delCol').change(function(){
    	console.log("la coloñaaaa");
    	var col = $(this).val();
    	$('#appendImg').find('img').remove().end();
		$('#appendImg').prepend($('<img>',{class: 'imageCol', src:'../img/sismo/ley/colonias/'+col}))
    });

		
});