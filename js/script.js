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
 /**La Data Pinta**/
 $(".circlePinta").mouseover(function() {
    $(this).find(".title").fadeIn();
  })
  .mouseout(function() {
    $(this).find(".title").fadeOut();
  });
  $("#cerrarPinta").on("click", function(){
    window.history.back();
  });
  var max = $("#containerPintaSection").height() -350;
  $.each( $('.containerCircle'), function(i, cont) {
     $('.circlePinta', cont).each(function(i, elem) {
          var top = max * Math.random();
          $(elem).css("top", top);
     });
  })
/**Quienes somos**/
  $("#myRange").val(1);
  $("#myRange").on("change", function(){
    var value = $(this).val();
    console.log(value);
    if (value == 1) {
      $(".bios").hide();
      $(".dany").show();
    }else if (value > 13 && value < 16) {
      $(".bios").hide();
      $(".emma").show();
    }else if (value > 27 && value < 31) {
      $(".bios").hide();
      $(".gis").show();
    }else if (value > 42 && value < 46) {
      $(".bios").hide();
      $(".irving").show();
    }else if (value > 56 && value < 60) {
      $(".bios").hide();
      $(".erandi").show();
    }else if (value > 70 && value < 74) {
      $(".bios").hide();
      $(".oliver").show();
    }else if (value > 84 && value < 88) {
      $(".bios").hide();
      $(".chio").show();
    }else if (value == 100) {
      $(".bios").hide();
      $(".wil").show();
    }
  });

  $(".person").on("click", function(){
    var bio = $(this).data("bio");
    var value = $(this).data("value");
    $(".bios").hide();
    $(bio).show();
    $("#myRange").val(value);
  })

    /***SISMO***/

	$("#imgArrows").hide();
	$("#first-title").on("click", function(){
		$("#info-banner").toggleClass("open");
    $(".option").toggleClass("hideOP");
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

	$('#scrollContainer').mouseover(function(){
		$("#imgArrows").show();
	});
	$('#scrollContainer').mouseout(function() {
		$("#imgArrows").hide();
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
    var sortArray = newArray.sort(compare);
    console.log(sortArray);
		$.each(sortArray, function( index, value ) {
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
//Sort array
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
