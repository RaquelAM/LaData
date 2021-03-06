$(document).ready(function(){
    /**Menu**/

    if ($("#menu").hasClass("site")) {
      $("#menu").append('<div id="containerMenu">\
        <div class="containerCerrar">\
          <img src="img/cerrar.svg" style="width: 25px;">\
          <div class="cerrar">\
            <span>Cerrar</span>\
          </div>\
        </div>\
        <div id="containerFind">\
          <input type="text" name="find">\
          <img src="img/buscar.svg" style="height: 25px; margin-left: 5px;">\
        </div>\
        <div class=" ptb-20px">\
          <div class="col-xs-6 active" id="reciente">\
            Reciente\
          </div>\
          <div class="col-xs-6" id="archivo">\
            Archivo\
          </div>\
        </div>\
        <div class="reciente">\
          <div>\
            <a href="Sismo/index.html">19/s ¿Qué nos pasó?</a>\
          </div>\
          <div>\
            <a href="http://www.ladata.mx/chiras_pelas">Chiras Pelas Calacas Flacas</a>\
          </div>\
          <div>\
            <a href="http://www.ladata.mx/violenciamujeres">Visualizar la violencia contra las mujeres</a>\
          </div>\
          <div>\
            <a href="http://www.ladata.mx/s04c02/index.html">Terremotos en México, 100 años y contando</a>\
          </div>\
          <div>\
            <a href="http://www.ladata.mx/s04c01/index.html">La Data del Box</a>\
          </div>\
        </div>\
        <div class="archivo" style="display: none;">\
          <a href="2017.html">\
          <span>2017</span>\
          </a>\
          <a href="2018.html">\
          &nbsp &nbsp<span>2018</span>\
          </a>\
        </div>\
        <hr>\
        <div id="temas">\
          <div>\
            <b>Temas</b>\
          </div>\
          <div id="scrollTemas">\
            <div id="contentTemas">\
              <span>Indígenas</span>\
              <span>Arte</span>\
              <span>DDHH</span>\
              <span>Género</span>\
              <span>Deporte</span>\
              <span>Gobierno</span>\
              <span>Economía</span>\
              <span>Seguridad</span>\
              <span>Desarrollo social</span>\
              <span>Latinoamérica</span>\
              <span>Política</span>\
              <span>Elecciones</span>\
              <span>Salud</span>\
              <span>Corrupción</span>\
              <span>Otros</span>\
              <span>Justicia</span>\
            </div>\
          </div>\
        </div>\
        <a href="recomienda.html">\
        <div id="recomienda">\
          <img src="img/corazon.svg" style="width: 25px;">\
          <div>\
            <span>#LaDataRecomienda</span>\
          </div>\
        </div>\
        </a>\
        <hr>\
        <div id="social">\
          <a href="https://www.facebook.com/ladatamx/?ref=bookmarks" target="_blank"><img src="img/facebook.svg"></a>\
          <a href="https://www.instagram.com/ladatamx/?hl=es-la" target="_blank"><img src="img/instagram.svg"></a>\
          <a href="https://twitter.com/ladatamx?lang=es" target="_blank"><img src="img/twitter.svg"></a>\
        </div>\
      </div>')
    }else{
      $("#menu").append('<div id="containerMenu">\
        <div class="containerCerrar">\
          <img src="../img/cerrar.svg" style="width: 25px;">\
          <div class="cerrar">\
            <span>Cerrar</span>\
          </div>\
        </div>\
        <div id="containerFind">\
          <input type="text" name="find">\
          <img src="../img/buscar.svg" style="height: 25px; margin-left: 5px;">\
        </div>\
        <div class=" ptb-20px">\
          <div class="col-sm-6 active" id="reciente">\
            Reciente\
          </div>\
          <div class="col-sm-6" id="archivo">\
            Archivo\
          </div>\
        </div>\
        <div class="reciente">\
          <div>\
            <a href="index.html">19/s ¿Qué nos pasó?</a>\
          </div>\
          <div>\
            <a href="http://www.ladata.mx/chiras_pelas">Chiras Pelas Calacas Flacas</a>\
          </div>\
          <div>\
            <a href="http://www.ladata.mx/violenciamujeres">Visualizar la violencia contra las mujeres</a>\
          </div>\
          <div>\
            <a href="http://www.ladata.mx/s04c02/index.html">Terremotos en México, 100 años y contando</a>\
          </div>\
          <div>\
            <a href="http://www.ladata.mx/s04c01/index.html">La Data del Box</a>\
          </div>\
        </div>\
        <div class="archivo" style="display: none;">\
          <a href="../2017.html">\
          <span>2017</span>\
          </a>\
          <a href="../2018.html">\
          &nbsp &nbsp<span>2018</span>\
          </a>\
        </div>\
        <hr>\
        <div id="temas">\
          <div>\
            <b>Temas</b>\
          </div>\
          <div id="scrollTemas">\
            <div id="contentTemas">\
              <span>Indígenas</span>\
              <span>Arte</span>\
              <span>DDHH</span>\
              <span>Género</span>\
              <span>Deporte</span>\
              <span>Gobierno</span>\
              <span>Economía</span>\
              <span>Seguridad</span>\
              <span>Desarrollo social</span>\
              <span>Latinoamérica</span>\
              <span>Política</span>\
              <span>Elecciones</span>\
              <span>Salud</span>\
              <span>Corrupción</span>\
              <span>Otros</span>\
              <span>Justicia</span>\
            </div>\
          </div>\
        </div>\
        <a href="recomienda.html">\
        <div id="recomienda">\
          <img src="../img/corazon.svg" style="width: 25px;">\
          <div>\
            <span>#LaDataRecomienda</span>\
          </div>\
        </div>\
        </a>\
        <hr>\
        <div id="social">\
          <a href="https://www.facebook.com/ladatamx/?ref=bookmarks" target="_blank"><img src="../img/facebook.svg"></a>\
          <a href="https://www.instagram.com/ladatamx/?hl=es-la" target="_blank"><img src="../img/instagram.svg"></a>\
          <a href="https://twitter.com/ladatamx?lang=es" target="_blank"><img src="../img/twitter.svg"></a>\
        </div>\
      </div>')
    }
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

/**Footer**/
$("footer").append('<div class="cintainer mt-20">\
  <div class="col-sm-4 text-center">\
    <a href="quienes.html">¿Quiénes somos?</a>\
  </div>\
  <div class="col-sm-4 text-center">\
    <a href="laData.html">¿Qué es La Data?</a>\
  </div>\
  <div class="col-sm-4 text-center">\
    <a href="colaboraciones.html">Clientes y colaboradores</a>\
  </div>\
</div>')
 /**La Data Pinta**/

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

  /*Buscador DataPinta*/
  $("#pintaSearch").keypress(function(e) {
    var max = $("#containerPintaSection").height() -350;
    var arrayPinta = [];
      if(e.which == 13) {
        var search = $(this).val().toLowerCase();
        if (search !== "") {
          var searchWords = search.split(" ");
          $.each(searchWords, function(index, value) {
            $.each(dataPinta, function(i, val){
              var words = val.Titulo.toLowerCase().concat(val.Etiquetas.toLowerCase());
              var n = words.indexOf(value.toLowerCase());
              if (n > 0) {
                arrayPinta.push(i);
              }
            })
          })
        }
        $(".containerPinta").empty();
        if (arrayPinta.length == 0) {
          ContDataPinta();
        }else{
        $.each(arrayPinta, function(i, value){
          var top = max * Math.random();
          $(".containerPinta").append('<div class="containerCircle">\
            <a href="'+dataPinta[value].Link+'"><div class="circlePinta" style="background-image: url(img/pinta/'+dataPinta[value].Imagen+'); top:'+top+'px">\
              <div class="title" >\
                '+dataPinta[value].Titulo+'\
              </div>\
            </div></a>\
          </div>')
        })}
      }
  });
  $("#containerFind img").on("click", function(){
    //Obtengo arreglo de las palabras del input

  });

/**Quienes somos**/
  $("#myRange").val(1);
  $("#myRange").on("change", function(){
    var value = $(this).val();
    if (value == 5) {
      $(".bios").hide();
      $(".dany").show();
    }else if (value > 15 && value < 18) {
      $(".bios").hide();
      $(".carlos").show();
    }else if (value > 27 && value < 31) {
      $(".bios").hide();
      $(".gis").show();
    }else if (value > 42 && value < 46) {
      $(".bios").hide();
      $(".erandi").show();
    }else if (value > 56 && value < 60) {
      $(".bios").hide();
      $(".oliver").show();
    }else if (value > 70 && value < 74) {
      $(".bios").hide();
      $(".chio").show();
    }else if (value > 84 && value < 88) {
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
    var sortArray = newArray.sort(compare);
		$.each(sortArray, function( index, value ) {
		  $("#delCol").append("<option value='"+value.image+"'>"+value.name+"</option>")
		});
    });

    $('#delCol').change(function(){
    	var col = $(this).val();
    	$('#appendImg').find('img').remove().end();
		$('#appendImg').prepend($('<img>',{class: 'imageCol', src:'../img/sismo/ley/colonias/'+col}))
    });
    $("#appendImg").find("p").on("click", function(){
        $("#appendImg").find("img").remove();
    });

    /*Buscador Archivo*/
    var arrayIndexArchivo = [];
    $("#containerFind img").on("click", function(){
      //Obtengo arreglo de las palabras del input
      var search = $("#containerFind input").val().toLowerCase();
      if (search !== "") {

      var searchWords = search.split(" ");
      $.each(searchWords, function(index, value) {
        $.each(dataArchivo, function(i, val){
          var words = val.Titulo.toLowerCase().concat(val.Etiquetas.toLowerCase());
          var n = words.indexOf(value.toLowerCase());
          if (n >= 0) {
            arrayIndexArchivo.push(i);
          }
        })
      })
      var stringArray = arrayIndexArchivo.toString();
      console.log(stringArray);
      var domain = document.domain;
      var url = "http://"+domain + "/busqueda.html?"+stringArray;
      window.location.replace(url)

      }
    });

    /*Busqueda por Temas*/
    $("#contentTemas span").on("click", function(){
      var tema =  $(this).text().toLowerCase();
      $.each(dataArchivo, function(i, val){
        var words = val.Titulo.toLowerCase().concat(val.Etiquetas.toLowerCase());
        var n = words.indexOf(tema.toLowerCase());
        if (n >= 0) {
          arrayIndexArchivo.push(i);
        }
      })
      var stringArray = arrayIndexArchivo.toString();
      var domain = document.domain;
      var url = "http://"+domain + "/busqueda.html?"+stringArray;
      window.location.replace(url)

    })

});
//Sort array
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
};
function resultSearch(){
  var link = window.location;
  var items = link.toString().split("?")[1].split(",");
  if (items[0] == "") {
    $("#search").append("<h4>No se encontraron resultados</h4>")
  }else{
  $.each(items, function(i, value){
    $("#search").append("<div class='col-md-4'>\
      <a href='"+dataArchivo[value].Link+"'>\
        <div class='arch' style='background-image: url(img/archivo/"+dataArchivo[value].Imagen+")''>\
          <span class='titleArch'>"+dataArchivo[value].Titulo+"</span>\
          <span class='mesArch'>"+dataArchivo[value].Mes+"</span>\
        </div>\
      </a>\
    </div>")
  })}
};
/**Contenido archivo**/
function archivoContent(year){
  //var json = JSON.parse(dataArchivo);
  $.each(dataArchivo, function (idx, obj) {
      if (obj.Año == year) {
        $(".archivoCont").append("<div class='col-md-4'>\
          <a href='"+obj.Link+"'>\
            <div class='arch' style='background-image: url(img/archivo/"+obj.Imagen+")''>\
              <span class='titleArch'>"+obj.Titulo+"</span>\
              <span class='mesArch'>"+obj.Mes+"</span>\
            </div>\
          </a>\
        </div>")
      }
  });
}
/**Datos DataPinta**/
function ContDataPinta(){
  var max = $("#containerPintaSection").height() -350;
  $.each(dataPinta, function(i, value){
    var top = max * Math.random();
    $(".containerPinta").append('<div class="containerCircle">\
      <a href="'+value.Link+'"><div class="circlePinta" style="background-image: url(img/pinta/'+value.Imagen+'); top:'+top+'px">\
        <div class="title" >\
          '+value.Titulo+'\
        </div>\
      </div></a>\
    </div>')
  });
}
