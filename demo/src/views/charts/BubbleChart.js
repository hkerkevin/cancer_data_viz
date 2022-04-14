import * as d3 from 'd3';

export function drawBubble(height, width){
  
  var margin = { top: 30, right: 20, bottom: 200, left: 150 };
  var width = 1000 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;
  
  var svg = d3.select("#bubble1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  var bubble_data = d3.csv("https://raw.githubusercontent.com/Heun-Johnson/dsci554projectdata/main/bubble_data.csv");

  bubble_data.then(function (dataset) { 
    
        var x = d3.scaleLinear()
          .domain([0, 80])
          .range([0, width]);
      
        var y = d3.scaleLinear()
          .domain([0, 4])
          .range([height, 0]);
      
        var z = d3.scaleLinear()
          .domain([0, d3.max(dataset, function(d) { return d.zip_pop; })])
          .range([0,3]);
  
        var xAxis = d3.axisBottom()
          .scale(x)
          .tickValues([0,20,40,60,80]);
      
        var yAxis = d3.axisLeft()
          .scale(y)
          .tickValues([0,1,2,3,4]);

          var Tooltip = d3.select("#bubble1")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px")

          
          var mouseover = function(d) {
            Tooltip
              .style("opacity", 1)
            d3.select(this)
              .style("fill", 'blue')
              .style('fill-opacity',0.5)
          }
        
          var mousemove = function(d) {
            Tooltip
              .html("Zip code: "+ this.getAttribute('zipcode')+", population: "+this.getAttribute('population'))
              .style("left", (this.getAttribute('cx_label')) + "px")
              .style("bottom", (this.getAttribute('cy_label')) + "px");
          }
        
          var mouseleave = function(d) {
            Tooltip
              .style("opacity", 0)
            d3.select(this)
            .attr('stroke','black')
              .style('fill','grey')
              .style('fill-opacity',0.1)
          }

  
        svg.selectAll('circle')
          .data(dataset)
          .enter()
          .append('circle')
          .attr('fill','grey')
          .style('fill-opacity',0.1)
          .attr('stroke','black')
          .attr('stroke-width',0.3)
          .attr('cx', function (d) { return x(d.zip_canc_deaths_10k); } )
          .attr('cx_label', function (d) { return x(d.zip_canc_deaths_10k)+45; } )
          .attr('cy', function (d) { return y(d.zip_canc_COH_10k); })
          .attr('cy_label', function (d) { return y(-d.zip_canc_COH_10k)-440; })
          .attr('r', function (d) { return z(d.zip_pop); })  
          // .attr('class', 'bubble')
          .attr('deaths',function(d) { return (d.zip_canc_deaths_10k); })
          .attr('population',function(d) { return (d.zip_pop); })
          .attr('zipcode',function(d) { return (d.zip_code); })
          .on("mouseover", mouseover)
          .on("mousemove", mousemove)
          .on("mouseleave", mouseleave)   ;
      // svg.selectAll('text')
      //     .data(dataset)
      //     .enter()
      //     .append('text')
      //     .attr('x', function (d, i) { return x(d.zip_canc_deaths_10k); })
      //     .attr('y', function (d) { return y(d.zip_canc_COH_10k);  })
      //     .attr('class', 'bubble')
      //     // .text(function (d) { return d.zip_code; })
  
        // linearRegression = ss.linearRegression(dataset.map(d => [d.deaths, d.coh_patients]));
        
  
        // The scale you use for bubble size
        var size = d3.scaleSqrt()
          .domain([1, 100000])  // What's in the data, let's say it is percentage
          .range([0, 30])  // Size in pixel
        
        // Add legend: circles
        var valuesToShow = [1000,20000, 100000]
        var xCircle = width-230
        var xLabel = width-180
        var yCircle = height-70
        svg
          .selectAll("legend")
          .data(valuesToShow)
          .enter()
          .append("circle")
            .attr("cx", xCircle)
            .attr("cy", function(d){ return yCircle - size(d) } )
            .attr("r", function(d){ return size(d) })
            .style("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 0.3)
            
        
        // Add legend: segments
        svg
          .selectAll("legend")
          .data(valuesToShow)
          .enter()
          .append("line")
            .attr('x1', function(d){ return xCircle + size(d) } )
            .attr('x2', xLabel)
            .attr('y1', function(d){ return yCircle - size(d) } )
            .attr('y2', function(d){ return yCircle - size(d) } )
            .attr('stroke', 'black')
            .attr('stroke-width', 0.5)
            .style('stroke-dasharray', ('2,2'))
        
        // Add legend: labels
        svg
          .selectAll("legend")
          .data(valuesToShow)
          .enter()
          .append("text")
            .attr('x', xLabel)
            .attr('y', function(d){ return yCircle - size(d) } )
            .text( function(d){ return d } )
            .style("font-size", 10)
            .attr('alignment-baseline', 'middle')
  
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);
      
        svg.append("g")
          .call(yAxis);
      
        svg.append("text")  
            .attr("x", width-650)
            .attr("y", height+60)
            .classed('label', true)
            .text("Number of cancer deaths in 2019 (per 10k residents)");
        
        svg.append("text")
            .attr("x", width-1400)
            .attr("y", height-650)
            .classed('label', true)
            .attr("transform", "rotate(-90)")
            .text("Number of cancer patients at City of Hope (per 10k residents)");
                      
        svg.append('text')
            .attr('x', width-340) 
            .attr('y', height-150) 
            .text('Number of residents in zip code:')
            .attr('class', 'bubble');    
          });
        
}
