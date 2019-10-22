// import playersAndStats18 from "./placeholder.js";
// const playersStats18 = require("./placeholder.js");

// // var dataset1 = [
// //   "417.08",
// //   "283.1",
// //   "372.1",
// //   "194.1",
// //   "328",
// //   "197",
// //   "294.6",
// //   "185.6",
// // ];
// var dataset1 = [
//   "Patrick Mahomes",
//   "Average QB",
//   "Todd Gurley",
//   "Average RB",
//   "Tyreek Hill",
//   "Average WR",
//   "Travis Kelce",
//   "Average TE",
// ];

// // d3.select("body")
// //   .selectAll("p")
// //   .data(dataset1)
// //   .enter()
// //   .append("p") // appends paragraph for each data element
// //   .text(dataset1[3]);

// var svgWidth = 1000;
// var svgHeight = 700;

// var svg = d3.select("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight)
//   .attr("class", "bar-chart");



// // var dataset2 = [80, 100, 56, 120, 180, 30, 40, 120, 160];
// var dataset2 = [417.08, 283.1, 372.1, 194.1, 328, 197, 294.6, 185.6, 25];

// var barPadding = 5;
// var barWidth = svgWidth / dataset2.length;

// // var yScale = d3.scaleLinear()
// //   .domain([0, d3.max(dataset2)])
// //   .range([0, svgHeight - 20]);

// var barChart = svg.selectAll("rect")
//     .data(dataset2)
//     .enter() 
//     .append("rect")
//     .attr("y", function(d) {
//       return svgHeight - d;
//     })
//     .attr("height", function(d) {
//       return d;
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("transform", function(d, i) {
//       var translate = [barWidth * i, 0];
//       return "translate(" + translate + ")";
//     });
    
// var xScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(dataset2)])
//   .range([0, svgWidth]);

// var yScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(dataset2)])
//   .range([svgHeight, 0]);

// var x_axis = d3.axisBottom().scale(xScale);

// var y_axis = d3.axisLeft().scale(yScale);    

// // svg
// //   .append("g")
// //   .attr("transform", "translate(50, 10)")
// //   .call(y_axis);

// // var xAxisTranslate = svgHeight - 20;

// // svg
// //   .append("g")
// //   .attr("transform", "translate(50, " + xAxisTranslate + ")")
// //   .call(x_axis);

// var text = svg
//       .selectAll("text")
//       .data(dataset2)
//       .enter()
//       .append("text")
//       .text(function(d) {
//         return d + " ppr pts";
//       })
//       .attr("y", function(d, i) {
//         return svgHeight - d - 4;
//       })
//       .attr("x", function(d, i) {
//         return barWidth * i;
//       })
//       .attr("fill", "black ");


      