
import * as d3 from 'd3';

export function drawChart(){

var margin = { top: 20, left: 75, bottom: 50, right: 50 },
    width = 850 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select('#chart').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

var x = d3.scaleBand();
var y = d3.scaleLinear();

// var top3, bot3;

var delay = function (d, i) {
    return i * 50;
};

var all, orderName;
var current, sortMode, filterMode;

d3.csv("https://raw.githubusercontent.com/hkerkevin/dsci554/main/dx_race.csv", d => {
    return {
        race: d.race,
        dx: +d.dx
    };
}).then(data => {
    all = data;
    console.log(JSON.stringify(all));

    //🎒 set top5 to top 5 gdps in the group of countries using array.slice here
    // top3 = data.sort((a, b) => d3.descending(a.dx, b.dx)).slice(0, 3);

    //🎒 set bot5 to bottom 5 gdps in the group of countries using array.slice here
    // bot3 = data.sort((a, b) => d3.ascending(a.dx, b.dx)).slice(0, 3);


    filter('#all');
    sort('#gdp_a');

    toggleFilter('#all');
    toggleSort('#gdp_a');

    draw();
});

//sort event handlers
d3.select('#gdp_a')
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "2px")
.style("border-radius", "5px")
    .on('click', () => {
        sort('#gdp_a');
        transition();
        toggleSort('#gdp_a');
    });

d3.select('#gdp_b')
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "2px")
.style("border-radius", "5px")
    .on('click', () => {
        sort('#gdp_b');
        transition();
        toggleSort('#gdp_b');
    });


d3.select('#orderName')
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "2px")
.style("border-radius", "5px")
    .on('click', () => {
        sort('#orderName');
        transition();
        toggleSort('#orderName');
    });

d3.select('#reset')
.style("opacity", 0) //get rid of reset just to see what it looks like
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "2px")
.style("border-radius", "5px")
    .on('click', () => {
        filter('#all');
        sort('#orderName');

        toggleSort(sortMode);
        toggleFilter('#all');

        transition();
        toggleSort('#reset');

        redraw();
    });

////

//filter event handlers
d3.select('#all')
    .on('click', () => {
        filter('#all');
        sort(sortMode);

        toggleSort(sortMode);
        toggleFilter('#all');

        redraw();
    });

d3.select('input')
    .on('change', () => {

        sort(sortMode);
        toggleSort(sortMode);

        redraw();
    });

function filter(mode) {
    if (mode === '#all') {
        current = JSON.parse(JSON.stringify(all));
    }
    // } else if (mode === '#top5') {
    //     current = JSON.parse(JSON.stringify(top3));
    // } else if (mode === '#bot5') {
    //     current = JSON.parse(JSON.stringify(bot3));
    // }
    filterMode = mode;
}

function sort(mode) {
    if (mode === '#gdp_a') {
        current.sort((a, b) => d3.ascending(a.dx, b.dx));
    } else if (mode === '#gdp_b') {
        current.sort((a, b) => d3.descending(a.dx, b.dx));
    } else if (mode === '#orderName') {
        current.sort((a, b) => d3.ascending(a.race, b.race));
    }
    x.domain(current.map(d => d.race));
    sortMode = mode;
}

function toggleSort(id) {
    d3.selectAll('.sort')
        .style('background-color', '#eee');
    d3.select(id)
        .style('background-color', 'lightblue');
}

//🎒 implement toggleFilter to highlight buttons with class .filter here (same as toggleSort with class .sort)
function toggleFilter(id) {
    d3.selectAll('.filter')
        .style('background-color', '#eee');
    d3.select(id)
        .style('background-color', 'lightblue');
}
///

function redraw() {
    //update scale
    x.domain(current.map(d => d.race));

    ////////////////////////////////
    // DATA JOIN FOR BARS.
    var bars = svg.selectAll('.bar')
        .data(current, d => d.race);

    // UPDATE.
    bars.transition()
        .duration(750)
        .delay(delay)
        .attr('x', d => x(d.race))
        .attr('width', x.bandwidth());

    // ENTER.
    bars.enter()
        .append('rect')
        .attr('x', d => x(d.race))
        .attr('y', d => y(0))
        .attr('width', x.bandwidth())
        .transition()
        .duration(750)
        .attr('class', 'bar')
        .attr('x', d => x(d.race))
        .attr('y', d => y(d.dx))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.dx));

    // EXIT.
    bars.exit()
        .transition()
        .duration(750)
        .style('opacity', 0)
        .remove();

    ////////////////////////////////
    // DATA JOIN FOR NAMES.
    var name = svg.selectAll('.name')
        .data(current, d => d.race);

    // UPDATE.
    name.transition()
        .duration(750)
        .delay(delay)
        .attr('x', (d, i) => x(d.race) + x.bandwidth() / 2);

    // ENTER.
    name.enter()
        .append('text')
        .attr('x', d => x(d.race) + x.bandwidth() / 2)
        .attr('y', d => y(d.dx) + (height - y(d.dx)) / 2)
        .style('opacity', 0)
        .transition()
        .duration(1000)
        .text(d => d.race)
        .attr('class', 'name')
        .attr('x', d => x(d.race) + x.bandwidth() / 2)
        .attr('y', d => y(d.dx) + (height - y(d.dx)) / 2)
        .style('opacity', 1);

    // EXIT.
    name.exit()
        .transition()
        .duration(750)
        .style('opacity', 0)
        .remove();
}

function transition() {
    var transition = svg.transition()
        .duration(750);

    transition.selectAll('.bar')
        .delay(delay)
        .attr('x', d => x(d.race));

    transition.selectAll('.name')
        .delay(delay)
        .attr('x', d => x(d.race) + x.bandwidth() / 2);
}

function draw() {
    x.domain(current.map(d => d.race))
        .range([0, width])
        .paddingInner(0.2);

    y.domain([0, d3.max(current, d => d.dx)])
        .range([height, 0]);

    svg.selectAll('.bar')
        .data(current, d => d.race)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.race))
        .attr('y', d => y(d.dx))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.dx))
        .attr('fill', '#add8e677');

    svg.selectAll('.name')
        .data(current, d => d.race)
        .enter()
        .append('text')
        .text(d => d.race)
        .attr('class', 'name')
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .attr('alignment-baseline', 'central')
        .attr('x', d => x(d.race) + x.bandwidth() / 2)
        .attr('y', d => y(d.dx) + (height - y(d.dx)) / 2);

    var xAxis;
    xAxis = d3.axisBottom()
        .scale(x)
        .ticks(0)
        .tickSize(0)
        .tickFormat('');

    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);


    var yAxis = d3.axisLeft()
        .scale(y)
        .ticks(5, 'd');

    svg.append('g')
        .attr('class', 'axis')
        .call(yAxis);

    svg.append('text')
        .attr('x', - height / 2)
        .attr('y', - margin.left * 0.7)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'central')
        .attr('class', 'ylabel')
        .append('tspan').text('Total diagonsed cases by race')
        .append('tspan').text('-2')
        .style('baseline-shift', 'super')
        .style('font-size', '0.7em');
}

}