let sachin = require("./data/sachin.json");
let sehwag = require("./data/sehwag.json");
let yuvraj = require("./data/yuvraj.json");
let dravid = require("./data/dravid.json");
let ganguly = require("./data/ganguly.json");
let virat = require("./data/virat.json");

let most_four_player= "";
let most_fours=0;
let check_status = (data) => {
    let total_fours=0;
    for (let [key, value] of Object.entries(data.data.batting)){
        if(value["4s"]){
            total_fours += parseInt(value["4s"]);
        }
    }
    if (most_fours<total_fours) {
        most_fours=total_fours;
        most_four_player=data.name;
    }
   
}

check_status(sachin);
check_status(sehwag);
check_status(yuvraj);
check_status(dravid);
check_status(ganguly);
check_status(virat);
console.log(most_four_player)
console.log("Total Fours :"+most_fours);



