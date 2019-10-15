import "./styles/index.scss";
import stats18 from "../ffstats18.js";
import allPlayers from "../ffplayers.js";


window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("app").innerText = "Hello World!";
  console.log(stats18[4988])
  console.log(allPlayers[4988])
  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     var myObj = JSON.parse(this.responseText);
  //     document.getElementById("demo").innerHTML = myObj;
  //   }
  // };
  // xmlhttp.open("GET", "ffstats.txt", true);
  // xmlhttp.send();
});