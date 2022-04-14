import * as d3 from 'd3';

export function drawMap(height, width){
    var margin = { top: 50, right: 50, bottom: 50, left: 50 };
    var width = 1300 - margin.left - margin.right;
    var height = 800 - margin.top - margin.bottom;
    
    var svg = d3.select("#map1")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    
    /////////////////////////////////////////////////////////////
    
    
    var promises = [];
    
    promises.push(d3.json("https://raw.githubusercontent.com/Heun-Johnson/dsci554projectdata/main/coh_area_simplified_rw.json"));
    promises.push(d3.json("https://raw.githubusercontent.com/Heun-Johnson/dsci554projectdata/main/data.json"));
    
    Promise.all(promises).then(function (values) {  
    
        //////////////////////////////////////////
        /// all for legend ///
        function legend({
            color,
            title,
            tickSize = 6,
            width = 800,
            height = 50 + tickSize,
            marginTop = 18,
            marginRight = 0,
            marginBottom = 16 + tickSize,
            marginLeft = 0,
            ticks = width / 64,
            tickFormat,
            tickValues
        } = {}) {  
        
            var svg = d3.create("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .style("overflow", "visible")
                .style("display", "block");    
        
            //discrete
            if (color.invertExtent) {
                const thresholds
                    = color.thresholds ? color.thresholds() // scaleQuantize
                        : color.quantiles ? color.quantiles() // scaleQuantile
                            : color.domain(); // scaleThreshold
        
                const thresholdFormat
                    = tickFormat === undefined ? d => d
                        : typeof tickFormat === "string" ? d3.format(tickFormat)
                            : tickFormat;
        
                var x = d3.scaleLinear()
                    .domain([-1, color.range().length - 1])
                    .rangeRound([marginLeft, width - marginRight]);
        
                svg.append("g")
                    .selectAll("rect")
                    .data(color.range())
                    .join("rect")
                    .attr("x", (d, i) => x(i - 1))
                    .attr("y", marginTop)
                    .attr("width", (d, i) => x(i) - x(i - 1))
                    .attr("height", height - marginTop - marginBottom)
                    .attr("fill", d => d);
        
                var tickValues = d3.range(thresholds.length);
                var tickFormat = i => thresholdFormat(thresholds[i], i);
            }
        
            svg.append("g")
                .attr("transform", `translate(0, ${height - marginBottom})`)
                .call(d3.axisBottom(x)
                    .ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined)
                    .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
                    .tickSize(tickSize)
                    .tickValues(tickValues))
                .call(g => g.selectAll(".tick line").attr("y1", marginTop + marginBottom - height))
                .call(g => g.select(".domain").remove())
                .call(g => g.append("text")
                    .attr("y", marginTop + marginBottom - height - 6)
                    .attr("fill", "currentColor")
                    .attr("text-anchor", "start")
                    .attr("font-weight", "bold")
                    .text(title));
        
            return svg.node();
        }
    
        //////////////////////////////////////////////////
        /// data and map ///
    
        var la_map = values[0];
        var canc_data = values[1];
    
        var color = d3.scaleQuantize([0, 36], d3.schemeGreys[9])  
    
        var canc_data = Object.assign(new Map(canc_data.slice(1).map(([zip_code,zip_canc_deaths_10k]) => [zip_code, +zip_canc_deaths_10k])));  
    
        canc_data.title = "2019 cancer deaths per 10k";
    
        var projection = d3.geoMercator()
            .fitSize([width, height], la_map);
            
        var path = d3.geoPath()
            .projection(projection);
    
        svg.append("g")
            .attr("transform", "translate(1000,80)")
            .append(() => legend({ color, title: canc_data.title, width: 200 }));

                
        var Tooltip = d3.select("#map1")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")


        var mousemove = function() {
        Tooltip
            .html(this.getAttribute('test'))
            .style("left", "250px")
            .style("bottom", "250px")
        }

        svg.append('g')
            .attr('class', 'zipcodes')
            .selectAll("path")
            .data(la_map.features)
            .enter()
            .append('path')
            .attr('d', path)
            .style("stroke", 'white')
            .style("stroke-width",0.2)
            .attr("fill", d => color(canc_data.get(d.properties.zcta))) 
            .attr('test', function (d) {return d.properties.zcta; } )
            .on('mouseover', function () {            
                // d3.select('#chor_info1')
                //     .text('Zip code: ' +  this.__data__.properties.zcta +  ' - Total population: ' +  this.__data__.properties.tot_pop + ' - Median age: ' +  this.__data__.properties.age_median + ' years');               
                d3.select(this).style("stroke", 'blue').style("stroke-width",3).style("stroke-opacity",0.5);
                })
            .on("mousemove", mousemove)
            .on("mouseout", function () {
              d3.select(this).style("stroke", 'white').style("stroke-width",0.2);
            });    
    


        var coh_hosp = [-117.97265500193778, 34.131232240226815];
    
        var marker = projection(coh_hosp);
    
        svg.append('circle')
            .attr('cx', marker[0])
            .attr('cy', marker[1])
            .attr('fill', 'blue')
            .attr('r', 10);
    });    
    
}





