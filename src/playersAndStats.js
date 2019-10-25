// import stats18 from "./ffstats18.js";
// import allPlayers from "./ffplayers";


  
const calcPlayerStats = function(allPlayers, stats18) {
  const playersStats = {};
  // debugger
  for (let i = 0; i < Object.values(allPlayers).length; i++){
    if (!!allPlayers[i] && !!stats18[i] && stats18[i].gp > 0 && (allPlayers[i].position === "QB" || allPlayers[i].position === "RB" || allPlayers[i].position === "WR" || allPlayers[i].position === "TE" )){

      // debugger
      playersStats[allPlayers[i].first_name+" "+allPlayers[i].last_name] = {
        "fantasy_positions": allPlayers[i].fantasy_positions || null,
        "year": 2018,
        "number": allPlayers[i].number || null,
        "full_name": allPlayers[i].search_full_name || null,
        "first_name": allPlayers[i].first_name || null,
        "last_name": allPlayers[i].last_name || null,
        "position": allPlayers[i].position || null,
        "age": allPlayers[i].age || null,
        "team": allPlayers[i].team || null,
        "player_id": allPlayers[i].player_id || null,
        "my_id": i || null,
        "gp": stats18[i].gp || 0,
        "gs": stats18[i].gs || 0,
        "pts_ppr": stats18[i].pts_ppr || 0,
        "rec": stats18[i].rec || 0,
        "rec_yd": stats18[i].rec_yd || 0,
        "rec_td": stats18[i].rec_td || 0,
        "rec_tgt": stats18[i].rec_tgt || 0,
        "rush_att": stats18[i].rush_att || 0,
        "rush_td": stats18[i].rush_td || 0,
        "rush_yd": stats18[i].rush_yd || 0,
        "td": stats18[i].td || 0,
        "pass_td": stats18[i].pass_td || 0,
        "pass_int": stats18[i].pass_int || 0,
        "pass_cmp": stats18[i].pass_cmp || 0,
        "pass_att": stats18[i].pass_att || 0,
        "pass_yd": stats18[i].pass_yd || 0,
        "pass_inc": stats18[i].pass_inc || 0,
        "fum_lost": stats18[i].fum_lost || 0,
      } 
    }
  }
  return playersStats;
} 

// const stats = playersStats(allPlayers, stats18);

// ("use strict");
// const fs = require("fs");
// async function doTask() {
//   let data = JSON.stringify(calcPlayerStats(allPlayers, stats18), null, 2);
//   fs.writeFileSync("placeholder.json", data);
// }
// doTask();

module.exports = calcPlayerStats;
