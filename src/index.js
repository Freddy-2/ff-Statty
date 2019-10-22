// import "./styles/index.scss";
// const stats18 = require("../ffstats18.js");
// const allPlayers = require("../ffplayers.js");
// const playersStats = require("../playersAndStats.js");
// import fs from "fs";
import playersAndStats18 from './placeholder'
// import cat from "./cat"
import createBarChart from './barChart'

window.addEventListener("DOMContentLoaded", () => {
  // document.getElementById("app").innerText = "Hello World!";
  // console.log(stats18[4988]);
  // console.log(allPlayers[4988]);
  // console.log(playersStats(allPlayers, stats18));
  // console.log(playersAndStats18);
  const playerKeys = Object.keys(playersAndStats18);
  // console.log(playerKeys)
  // console.log(cat)
  var dataset1 = [
    "Patrick Mahomes",
    "Average QB",
    "Todd Gurley",
    "Average RB",
    "Tyreek Hill",
    "Average WR",
    "Travis Kelce",
    "Average TE"
  ];
  var dataset2 = [
    417.08,
    283.1,
    372.1,
    194.1,
    328,
    197,
    294.6,
    185.6,
    155.4
  ];
  // d3.select("body")
  //   .selectAll("p")
  //   .data(dataset1)
  //   .enter()
  //   .append("p") // appends paragraph for each data element
  //   .text(dataset1[3]);

  createBarChart(dataset2);
  
  
  d3.select("p").on("click", function(){
      // debugger
      dataset2.pop();
      dataset2.push(playersAndStats18[document.getElementById("myInput").value].pts_ppr);
      console.log(dataset2);
      d3.select("svg").selectAll("*").remove();
      createBarChart(dataset2);
    });


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
    // function pushPlayerScore(){
    //   dataset2.push(document.getElementById("myInput"));
    // }


  autocomplete(document.getElementById("myInput"), playerKeys);

  
});

// const stats = playersStats(allPlayers, stats18);

// "use strict";
// const fs = require("fs");
// function doTask() {
  // let data = JSON.stringify(stats, null, 2);
  // fs.writeFileSync("placeholder.json", data);
// }
// doTask();