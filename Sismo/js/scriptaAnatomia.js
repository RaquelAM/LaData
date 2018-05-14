


    var w = parseInt(d3.select("#d1").style("width"),10),
        h = .618*parseInt(d3.select("#d1").style("width"),10),
        x = d3.scale.linear().range([0, w]),
        y = d3.scale.linear().range([0, h]),
        color = d3.scale.ordinal().domain(["CDMX","México","Puebla","Morelos"]).range(["#db3664","#c30100","#6e1f35","#910000"]),
        opa=d3.scale.ordinal().domain(["IMSS","ISSSTE","PEMEX","SEMAR","SESA MORELOS","SESA PUEBLA","SS FEDERAL"]).range([1,.5,.4,.7,.6,.6,.8]),
        root,
        node;

    var treemap = d3.layout.treemap()
        .round(false)
        .size([w, h])
        .sticky(true)
        .value(function(d) {
          return d.size; });

    var svg = d3.select("#d1")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .append("g")
        .attr("transform", "translate(0,0)");

    d3.json("./datos/treemap2int.json", function(data) {
        node = root = data;

        var nodes = treemap.nodes(root)
          .filter(function(d) {

            return !d.children; });

      var cell = svg.selectAll("g")
          .data(nodes)
        .enter().append("svg:g")
          .attr("class", "cell")
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
          .on("click", function(d) { return zoom(node == d.parent ? root : d.parent); });

      cell.append("svg:rect")
          .attr("width", function(d) { return d.dx-1.5 ; })
          .attr("height", function(d) { return d.dy -1.5; })
          .attr("rx",3)
          .attr("ry",3)
          .style("fill", function(d) { return color(d.parent.parent.name); })
          .style("fill-opacity",function(d){return opa(d.parent.name) });

      cell.append("text",function(d){for(var i =1;i<5;i++){}})
          .style("opacity",function(d){if(30+11*d.name.split(" ").length>d.dy || d.dx<70){return 0}else{return 1 }})

      		.selectAll("tspan")
      		.data(function(d){
      			return d.name.split(" ")})
      		.enter().append("tspan").attr("x",2).attr("y",function(d,i){return 30+i*11})
          //.attr("x", function(d) { return 2; })
          //.attr("y", function(d) { return 5; })
          //.text(function(d) {
            //return d.name.split(" ").join("\n"); })
          .text(function(d){return d;})
          .attr("dy", ".35em")
          .attr("text-anchor", "start");

          //.style("color",function(d){return "white";})
      cell.append("title")
          .text(function(d){return d.parent.name+" \n"+ d.name+" \n("+d.size+" personas)";})
      cell.append("text").attr("id","npers").attr("x",2).attr("y",11).attr("text-anchor","start").text(function(d){return d.size+" PERSONAS"}).style("font-size",11).style("fill","white").style("font-weight",900)
      		.style("opacity",function(d){if(d.dx<70||d.dy<11){return 0}else{return 1}})
      cell.append("text").attr("id","serv").attr("x",2).attr("y",22).attr("text-anchor","start").text(function(d){return d.parent.name}).style("font-size",11)
      		.style("opacity",function(d){if(d.dx<70||d.dy<20){return 0 }else{return 1}})

      d3.select(window).on("click", function() { zoom(root); });

      d3.select("select").on("change", function() {
        treemap.value(this.value == "size" ? size : count).nodes(root);
        zoom(node);
      });
    });

    function size(d) {
      return d.size;
    }

    function count(d) {
      return 1;
    }

    function zoom(d) {
      var kx = w / d.dx, ky = h / d.dy;
      x.domain([d.x, d.x + d.dx]);
      y.domain([d.y, d.y + d.dy]);

      var t = svg.selectAll("g.cell").transition()
          .duration(d3.event.altKey ? 7500 : 750)
          .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

      t.select("rect")
          .attr("width", function(d) { return kx * d.dx -1.5; })
          .attr("height", function(d) { return ky * d.dy -1.5; })
      t.select("text").style("opacity",function(d){if(30+11*d.name.split(" ").length>d.dy*ky || kx*d.dx<70){return 0}else{return 1 }});
      t.select("text#npers").style("opacity",function(d){if(kx*d.dx<70||ky*d.dy<11){return 0}else{return 1}});
      t.select("text#serv").style("opacity",function(d){if(kx*d.dx<70||ky*d.dy<20){return 0 }else{return 1}});
      t.select("tspan")
          .attr("x", function(d) { return 2; })
          .attr("y", function(d) { return 30; });


      node = d;
      d3.event.stopPropagation();
    }
