var w=parseInt(d3.select("#d1").style("width"),10);
var h=1.02*w*4.08;
var c=w/1280;
var h1=.02*h;
console.log(c)



svg=d3.select("#d1")
	.append("svg")
	.attr("width",w)
	.attr("height",h);


d3.tsv("datos/etiquetas.tsv",type,function(error,data){
	svg.selectAll("etiquetas")
		.data(data)
		.enter()
 		.append("image")
 		.attr("x",function(d,i){return c*d.px})
 		.attr("y",function(d,i){return c*d.py+h1})
 		.attr("xlink:href",function(d,i){return "datos/separadores/"+d.nombre})
 		.attr("width",function(d,i){return c*d.lx})
 		.attr("height",function(d,i){return c*d.ly})
 		.style("opacity",function(d,i){if(i<=6){return 0 }else{console.log(d.nombre);return 1}})
 		.attr("class",function(d,i){if(i<=6){return "Dele" }else{console.log(d.nombre);return "Suel"}});
})


d3.tsv("datos/datasismo.tsv",type,function(error,data){
 	console.log(data[1])
 	svg.selectAll("edificios")
 		.data(data)
 		.enter()
 		.append("g")
 		.attr("transform",function(d,i){return "translate("+c*d.suelox+","+(c*d.sueloy+h1)+")"})
 		.attr("class","edificios")
 		.append("image")
 		.attr("xlink:href",function(d,i){return "datos/edificios/"+d.NombreSVG})
 		.attr("width",function(d,i){return c*d.ancho})
 		.attr("height",function(d,i){return c*d.largo})

 	svg.append("text")
		.text("Ver por delegación")
		.attr("x",w/4)
		.attr("y",h1/2)
		.attr("class","suelo")
		.attr("text-anchor","middle")
		.attr("dominant-baseline"," text-before-edge")
		.style("font-size",parseInt(3+100*c/5.)+"px")
		.style("fill-opacity",.4)
		.on("click",fclick);

	svg.append("text")
		.text("Ver por tipo de suelo")
		.attr("x",3*w/4)
		.attr("y",h1/2)
		.attr("class","delegacion")
		.attr("text-anchor","middle")
		.attr("dominant-baseline"," text-before-edge")
		.style("font-size",parseInt(3+100*c/5.)+"px")
		.style("fill-opacity",1)
		.on("click",fclick);

	var ladata=data;
 });





function fclick(ladata){
	if(d3.select(this).attr("class")=="suelo"){
	d3.selectAll(".edificios")
		.transition()
		.duration(2000)
		.attr("transform",function(d,i){console.log(d.delx);
			return "translate("+c*d.delx+","+(c*d.dely+h1)+")"})

	d3.select(this)
		.transition()
		.duration(2000)
		.style("fill-opacity",1)

	d3.select(".delegacion")
		.transition()
		.duration(2000)
		.style("fill-opacity",.4)


	d3.selectAll(".Dele")
		.transition()
		.duration(2000)
		.style("opacity",1);

	d3.selectAll(".Suel")
		.transition()
		.duration(2000)
		.style("opacity",0)

	}else{

	d3.selectAll(".edificios")
		.transition()
		.duration(2000)
		.attr("transform",function(d,i){console.log(d.delx);
			return "translate("+c*d.suelox+","+(c*d.sueloy+h1)+")"});

	d3.select(this)
		.transition()
		.duration(2000)
		.style("fill-opacity",1)


	d3.select(".suelo")
		.transition()
		.duration(2000)
		.style("fill-opacity",.4)

	d3.selectAll(".Dele")
		.transition()
		.duration(2000)
		.style("opacity",0);

	d3.selectAll(".Suel")
		.transition()
		.duration(2000)
		.style("opacity",1)


	}
	}








function type(d) {
  d.population = +d.population;
  return d;
};
