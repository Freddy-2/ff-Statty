// import "./styles/index.scss";
// const stats18 = require("../ffstats18.js");
// const allPlayers = require("../ffplayers.js");
// const playersStats = require("../playersAndStats.js");
// import fs from "fs";
import playersAndStats18 from './placeholder'
// import cat from "./cat"

window.addEventListener("DOMContentLoaded", () => {
  // document.getElementById("app").innerText = "Hello World!";
  // console.log(stats18[4988]);
  // console.log(allPlayers[4988]);
  // console.log(playersStats(allPlayers, stats18));
  console.log(playersAndStats18);
  const playerKeys = Object.keys(playersAndStats18);
  console.log(playerKeys)
  // console.log(cat)

  function autocomplete(input, players) {
   
    var currentFocus;
    input.addEventListener("input", function(e) {
      var a,b,i,
      val = this.value;
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      
      this.parentNode.appendChild(a);
      
      for (i = 0; i < players.length; i++) {
        
        if (players[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          
          b = document.createElement("DIV");
          
          b.innerHTML = "<strong>" + players[i].substr(0, val.length) + "</strong>";
          b.innerHTML += players[i].substr(val.length);
          
          b.innerHTML += "<input type='hidden' value='" + players[i] + "'>";
          
          b.addEventListener("click", function(e) {
            
            input.value = this.getElementsByTagName("input")[0].value;
            
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    
    input.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {

        currentFocus++;
        
        addActive(x);
      } else if (e.keyCode == 38) {
        
        currentFocus--;
       
        addActive(x);
      } else if (e.keyCode == 13) {

        e.preventDefault();
        if (currentFocus > -1) {

          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {

      if (!x) return false;

      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;

      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != input) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function(e) {
      closeAllLists(e.target);
    });
  }


  autocomplete(document.getElementById("myInput"), playerKeys);

  var dataset1 = [
  "Patrick Mahomes",
  "Average QB",
  "Todd Gurley",
  "Average RB",
  "Tyreek Hill",
  "Average WR",
  "Travis Kelce",
  "Average TE",
];

// d3.select("body")
//   .selectAll("p")
//   .data(dataset1)
//   .enter()
//   .append("p") // appends paragraph for each data element
//   .text(dataset1[3]);

var svgWidth = 1000;
var svgHeight = 700;

var svg = d3.select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "bar-chart");



// var dataset2 = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var dataset2 = [417.08, 283.1, 372.1, 194.1, 328, 197, 294.6, 185.6, playersAndStats18.marquezvaldesscantling.pts_ppr];

var barPadding = 5;
var barWidth = svgWidth / dataset2.length;

// var yScale = d3.scaleLinear()
//   .domain([0, d3.max(dataset2)])
//   .range([0, svgHeight - 20]);

var barChart = svg.selectAll("rect")
    .data(dataset2)
    .enter() 
    .append("rect")
    .attr("y", function(d) {
      return svgHeight - d;
    })
    .attr("height", function(d) {
      return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i) {
      var translate = [barWidth * i, 0];
      return "translate(" + translate + ")";
    });
    
var xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset2)])
  .range([0, svgWidth]);

var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset2)])
  .range([svgHeight, 0]);

var x_axis = d3.axisBottom().scale(xScale);

var y_axis = d3.axisLeft().scale(yScale);    

// svg
//   .append("g")
//   .attr("transform", "translate(50, 10)")
//   .call(y_axis);

// var xAxisTranslate = svgHeight - 20;

// svg
//   .append("g")
//   .attr("transform", "translate(50, " + xAxisTranslate + ")")
//   .call(x_axis);

var text = svg
      .selectAll("text")
      .data(dataset2)
      .enter()
      .append("text")
      .text(function(d) {
        return d + " ppr pts";
      })
      .attr("y", function(d, i) {
        return svgHeight - d - 4;
      })
      .attr("x", function(d, i) {
        return barWidth * i;
      })
      .attr("fill", "black ");
});

// const stats = playersStats(allPlayers, stats18);

// "use strict";
// const fs = require("fs");
// function doTask() {
  // let data = JSON.stringify(stats, null, 2);
  // fs.writeFileSync("placeholder.json", data);
// }
// doTask();