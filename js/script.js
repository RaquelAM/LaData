$(document).ready(function(){
    /***HOME***/
    $("#reciente").on("click", function(){
        $("#reciente").addClass("active");
        $("#archivo").removeClass("active");
        $(".reciente").show();
        $(".archivo").hide();
    });
    $("#archivo").on("click", function(){
        $("#archivo").addClass("active");
        $("#reciente").removeClass("active");
        $(".reciente").hide();
        $(".archivo").show();
    });

    $("#ham").on("click", function(){
        $("#ham").hide();
        $("#menu").addClass("open");
        $("header").find(".row").addClass("open");
        $("footer").addClass("open");
        $("#home").addClass("open");
    });
    $(".containerCerrar").on("click", function(){
        $("#ham").show();
        $("#menu").removeClass("open");
        $("header").find(".row").removeClass("open");
        $("footer").removeClass("open");
        $("#home").removeClass("open");
    });



    /***SISMO***/
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

    $("#delegacion").on("click",function(){
    	$(this).addClass("active");
    	$("#suelo").removeClass("active");
    	$("#all").html("<img class='separadores' src='../img/sismo/ley/separadores/delbj.svg' />\
    		<img src='../img/sismo/ley/edificios/avninosheroes173.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/balsas18.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/bretana90.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/concepcionbesitegui1509.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/edimburgo4.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/emilianozapata56.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/enriquerebsamen241.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/escocia4.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/patriciosanz37.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/prolpeten915.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/saratoga714.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/tokio517.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/viaductomiguelaleman106.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/xola32.bj.svg' />\
    		<img class='separadores' src='../img/sismo/ley/separadores/delco.svg' />\
    		<img src='../img/sismo/ley/edificios/avsantaana300.co.svg' />\
    		<img src='../img/sismo/ley/edificios/caltlalpan2050.co.svg' />\
    		<img src='../img/sismo/ley/edificios/calhueso480.co.svg' />\
    		<img src='../img/sismo/ley/edificios/canalmiramontes2747.co.svg' />\
    		<img src='../img/sismo/ley/edificios/cuauhtemoc75.co.svg' />\
    		<img src='../img/sismo/ley/edificios/edmultifamiliar.co.svg' />\
    		<img src='../img/sismo/ley/edificios/escocia29.co.svg' />\
    		<img src='../img/sismo/ley/edificios/escocia33.co.svg' />\
    		<img src='../img/sismo/ley/edificios/rancholosarcos32.co.svg' />\
    		<img class='separadores' src='../img/sismo/ley/separadores/delcu.svg' />\
    		<img src='../img/sismo/ley/edificios/alvarobregon284.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/alvarobregon286.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/amsterdam25.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/amsterdam107.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/bolivar168.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/calsanantonioabad122.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/chihuahua110.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/coahuila8.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/genova33.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/magnolia76.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/medellin176.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/mina16.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/puebla282.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/queretaro222.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/salvadordmiron155.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/sonora149.cu.svg' />\
    		<img class='separadores' src='../img/sismo/ley/separadores/delga.svg' />\
    		<img src='../img/sismo/ley/edificios/calle323655.ga.svg' />\
    		<img src='../img/sismo/ley/edificios/coquimbo911.ga.svg' />\
    		<img class='separadores' src='../img/sismo/ley/separadores/deli.svg' />\
    		<img src='../img/sismo/ley/edificios/paseodelasgalias47.i.svg' />\
    		<img class='separadores' src='../img/sismo/ley/separadores/delt.svg' />\
    		<img src='../img/sismo/ley/edificios/puente222.t.svg' />\
    		<img class='separadores' src='../img/sismo/ley/separadores/delx.svg' />\
    		<img src='../img/sismo/ley/edificios/ranchotamboreo11.t.svg' />\
    		<img src='../img/sismo/ley/edificios/avmexico1.x.svg' />\
    		<img src='../img/sismo/ley/edificios/avmexicoponiente47.x.svg' />\
    		");
    });

    $("#suelo").on("click",function(){
    	$(this).addClass("active");
    	$("#delegacion").removeClass("active");
    	$("#all").html("<img class='separadores' src='../img/sismo/ley/separadores/lacustre.svg' />\
    		<img src='../img/sismo/ley/edificios/avninosheroes173.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/balsas18.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/bretana90.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/concepcionbesitegui1509.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/emilianozapata56.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/enriquerebsamen241.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/prolpeten915.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/saratoga714.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/tokio517.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/viaductomiguelaleman106.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/avsantaana300.co.svg' />\
    		<img src='../img/sismo/ley/edificios/calhueso480.co.svg' />\
    		<img src='../img/sismo/ley/edificios/canalmiramontes2747.co.svg' />\
    		<img src='../img/sismo/ley/edificios/escocia29.co.svg' />\
    		<img src='../img/sismo/ley/edificios/escocia33.co.svg' />\
    		<img src='../img/sismo/ley/edificios/rancholosarcos32.co.svg' />\
    		<img src='../img/sismo/ley/edificios/alvarobregon284.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/alvarobregon286.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/amsterdam25.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/amsterdam107.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/bolivar168.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/calsanantonioabad122.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/chihuahua110.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/coahuila8.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/genova33.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/magnolia76.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/medellin176.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/mina16.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/puebla282.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/queretaro222.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/salvadordmiron155.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/sonora149.cu.svg' />\
    		<img src='../img/sismo/ley/edificios/calle323655.ga.svg' />\
    		<img src='../img/sismo/ley/edificios/coquimbo911.ga.svg' />\
    		<img src='../img/sismo/ley/edificios/ranchotamboreo11.t.svg' />\
    		<img class='separadores' src='../img/sismo/ley/separadores/transicion.svg' />\
    		<img src='../img/sismo/ley/edificios/escocia4.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/edimburgo4.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/patriciosanz37.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/xola32.bj.svg' />\
    		<img src='../img/sismo/ley/edificios/caltlalpan2050.co.svg' />\
    		<img src='../img/sismo/ley/edificios/cuauhtemoc75.co.svg' />\
    		<img src='../img/sismo/ley/edificios/edmultifamiliar.co.svg' />\
    		<img src='../img/sismo/ley/edificios/paseodelasgalias47.i.svg' />\
    		<img src='../img/sismo/ley/edificios/puente222.t.svg' />\
    		<img src='../img/sismo/ley/edificios/avmexico1.x.svg' />\
    		<img src='../img/sismo/ley/edificios/avmexicoponiente47.x.svg' />\
    		");
    });
		
});