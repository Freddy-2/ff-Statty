// import "./styles/index.scss";
// const stats18 = require("../ffstats18.js");
// const allPlayers = require("../ffplayers.js");
// const playersStats = require("../playersAndStats.js");
// import fs from "fs";
import playersAndStats18 from './maindata'
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
  // var dataset1 = [
  //   "Patrick Mahomes",
  //   "Average QB",
  //   "Todd Gurley",
  //   "Average RB",
  //   "Tyreek Hill",
  //   "Average WR",
  //   "Travis Kelce",
  //   "Average TE"
  // ];
  var dataset2 = [
   {pts: playersAndStats18["Patrick Mahomes"].pts_ppr, name: playersAndStats18["Patrick Mahomes"].full_name},
   {pts: 283.1, name: "Average QB"},
   {pts: playersAndStats18["Saquon Barkley"].pts_ppr, name: playersAndStats18["Saquon Barkley"].full_name},
   {pts: 194.1, name: "Average RB"},
   {pts: playersAndStats18["Tyreek Hill"].pts_ppr, name: playersAndStats18["Tyreek Hill"].full_name},
   {pts: 197, name: "Average WR"},
   {pts: playersAndStats18["Travis Kelce"].pts_ppr, name: playersAndStats18["Travis Kelce"].full_name},
   {pts: 185.6, name: "Average TE"},
   {pts: playersAndStats18["Ronald Jones II"].pts_ppr, name: playersAndStats18["Ronald Jones II"].full_name},
  ];
  // d3.select("body")
  //   .selectAll("p")
  //   .data(dataset1)
  //   .enter()
  //   .append("p") // appends paragraph for each data element
  //   .text(dataset1[3]);

  function setName(input) {
   let newName = document.getElementById("replaceable-name");
   newName.innerHTML = input + " " + playersAndStats18[input].position;
  }
  function setStats(input) {
    // debugger
   let newName = document.getElementById("stats-name");
   let position = document.getElementById("stats-position");
   let jerseyNum = document.getElementById("Jersey-Number");
   let year = document.getElementById("Year");
   let team = document.getElementById("Team");
   let gp = document.getElementById("Games-Played");
   let gs = document.getElementById("Games-Started");
   let pa = document.getElementById("Pass-Attempts");
   let pc = document.getElementById("Pass-Completions");
   let pi = document.getElementById("Pass-Incompletions");
   let py = document.getElementById("Passing-Yards");
   let pt = document.getElementById("Passing-Touchdowns");
   let int = document.getElementById("Interceptions");
   let fum = document.getElementById("Fumbles-Lost");
   let tar = document.getElementById("Targets");
   let rec = document.getElementById("Receptions");
   let recyd = document.getElementById("Receieving-Yards");
   let rectd = document.getElementById("Receieving-Touchdowns");
   let rushatt = document.getElementById("Rush-Attempts");
   let rushyd = document.getElementById("Rushing-Yards");
   let rushtd = document.getElementById("Rushing-Touchdowns");
   let tds = document.getElementById("Total-Touchdowns");
   newName.innerHTML = input.first_name + " " + input.last_name;
   jerseyNum.innerHTML = input.number;
   year.innerHTML = input.year;
   team.innerHTML = input.team || "None";
   gp.innerHTML = input.gp;
   gs.innerHTML = input.gs;
   pa.innerHTML = input.pass_att;
   pc.innerHTML = input.pass_cmp;
   pi.innerHTML = input.pass_inc;
   py.innerHTML = input.pass_yd;
   pt.innerHTML = input.pass_td;
   int.innerHTML = input.pass_int;
   fum.innerHTML = input.fum_lost;
   tar.innerHTML = input.rec_tgt;
   rec.innerHTML = input.rec;
   recyd.innerHTML = input.rec_yd;
   rectd.innerHTML = input.rec_td;
   rushatt.innerHTML = input.rush_att;
   rushyd.innerHTML = input.rush_yd;
   rushtd.innerHTML = input.rush_td;
   tds.innerHTML = input.td;
   position.innerHTML = input.position;
  }


  createBarChart(dataset2);
  
  d3.select("p").on("click", function(){
      // debugger
      if (playersAndStats18[document.getElementById("myInput").value].pts_ppr === undefined){
        return;
      }
      dataset2.pop();
      dataset2.push({pts: playersAndStats18[document.getElementById("myInput").value].pts_ppr, name: playersAndStats18[document.getElementById("myInput").value].full_name} );
      console.log(dataset2);
      d3.select("svg").selectAll("*").remove();
      createBarChart(dataset2);
      setName(document.getElementById("myInput").value);
      setStats(playersAndStats18[document.getElementById("myInput").value]);
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