let sachin = require("./data/sachin.json");
let sehwag = require("./data/sehwag.json");
let yuvraj = require("./data/yuvraj.json");
let dravid = require("./data/dravid.json");
let ganguly = require("./data/ganguly.json");
let virat = require("./data/virat.json");

function cal(player) {
    let total4 = 0;
    let total6 = 0;
    let totalrun=0;
    let a = parseInt(player.data.batting.listA["4s"]);
    let a_check= Number.isInteger(a);
    let b = parseInt(player.data.batting.firstClass["4s"]);
    let b_check = Number.isInteger(b);
    let c = parseInt(player.data.batting.T20Is["4s"]);
    let c_check = Number.isInteger(c);
    let d = parseInt(player.data.batting.ODIs["4s"]);
    let d_check = Number.isInteger(d);
    let e= parseInt(player.data.batting.tests["4s"]);
    let e_check = Number.isInteger(e);
    if(a_check==true) {
        total4 += a;
    }
    if(b_check==true) {
        total4 += b;
    }
    if(c_check==true) {
        total4 += c;
    }
    if(d_check==true) {
        total4 += d;
    }
    if(e_check==true) {
        total4 += e;
    }
    
     a = parseInt(player.data.batting.listA["6s"]);
     a_check= Number.isInteger(a);
     b = parseInt(player.data.batting.firstClass["6s"]);
     b_check = Number.isInteger(b);
     c = parseInt(player.data.batting.T20Is["6s"]);
     c_check = Number.isInteger(c);
     d = parseInt(player.data.batting.ODIs["6s"]);
     d_check = Number.isInteger(d);
     e= parseInt(player.data.batting.tests["6s"]);
     e_check = Number.isInteger(e);
    if(a_check==true) {
        total6 += a;
    }
    if(b_check==true) {
        total6 += b;
    }
    if(c_check==true) {
        total6 += c;
    }
    if(d_check==true) {
        total6 += d;
    }
    if(e_check==true) {
        total6 += e;
    }
    a = parseInt(player.data.batting.listA["Runs"]);
    a_check= Number.isInteger(a);
    b = parseInt(player.data.batting.firstClass["Runs"]);
    b_check = Number.isInteger(b);
    c = parseInt(player.data.batting.T20Is["Runs"]);
    c_check = Number.isInteger(c);
    d = parseInt(player.data.batting.ODIs["Runs"]);
    d_check = Number.isInteger(d);
    e= parseInt(player.data.batting.tests["Runs"]);
    e_check = Number.isInteger(e);
   if(a_check==true) {
       totalrun += a;
   }
   if(b_check==true) {
       totalrun += b;
   }
   if(c_check==true) {
       totalrun += c;
   }
   if(d_check==true) {
       totalrun += d;
   }
   if(e_check==true) {
       totalrun += e;
   }
    return [total6,total4,totalrun];
    
}
function calwithoutt20(player) {
    let total4 = 0;
    let total6 = 0;
    let totalrun=0;
    let a = parseInt(player.data.batting.listA["4s"]);
    let a_check= Number.isInteger(a);
    let b = parseInt(player.data.batting.firstClass["4s"]);
    let b_check = Number.isInteger(b);
   ;
    let d = parseInt(player.data.batting.ODIs["4s"]);
    let d_check = Number.isInteger(d);
    let e= parseInt(player.data.batting.tests["4s"]);
    let e_check = Number.isInteger(e);
    if(a_check==true) {
        total4 += a;
    }
    if(b_check==true) {
        total4 += b;
    }
    
    if(d_check==true) {
        total4 += d;
    }
    if(e_check==true) {
        total4 += e;
    }
     a = parseInt(player.data.batting.listA["6s"]);
     a_check= Number.isInteger(a);
     b = parseInt(player.data.batting.firstClass["6s"]);
     b_check = Number.isInteger(b);
     d = parseInt(player.data.batting.ODIs["6s"]);
     d_check = Number.isInteger(d);
     e= parseInt(player.data.batting.tests["6s"]);
     e_check = Number.isInteger(e);
    if(a_check==true) {
        total6 += a;
    }
    if(b_check==true) {
        total6 += b;
    }
    if(d_check==true) {
        total6 += d;
    }
    if(e_check==true) {
        total6 += e;
    }
    a = parseInt(player.data.batting.listA["Runs"]);
    a_check= Number.isInteger(a);
    b = parseInt(player.data.batting.firstClass["Runs"]);
    b_check = Number.isInteger(b);
    d = parseInt(player.data.batting.ODIs["Runs"]);
    d_check = Number.isInteger(d);
    e= parseInt(player.data.batting.tests["Runs"]);
    e_check = Number.isInteger(e);
   if(a_check==true) {
       totalrun += a;
   }
   if(b_check==true) {
       totalrun += b;
   }
   if(d_check==true) {
       totalrun += d;
   }
   if(e_check==true) {
       totalrun += e;
   }
    return [total6,total4,totalrun];
    
}
let sachin_value_array = cal(sachin);
let sehwag_value_array = cal(sehwag);
let yuvraj_value_array = cal(yuvraj);
let dravid_value_array = cal(dravid);
let virat_value_array = cal(virat);
let ganguly_value_array = calwithoutt20(ganguly);

let more6=sachin_value_array[0];
let more6_name=sachin.name;

if (sehwag_value_array[0]>more6) {
    more6=sehwag_value_array[0]
     more6_name=sehwag.name
}
if (yuvraj_value_array[0]>more6) {
    more6=yuvraj_value_array[0]
    more6_name=yuvraj.name
}
if(dravid_value_array[0]>more6) {
    more6=dravid_value_array[0]
    more6_name=dravid.name
}
if (virat_value_array[0]>more6) {
    more6=virat_value_array[0]
    more6_name=virat.name
}
if (ganguly_value_array>more6) {
    more6=ganguly_value_array[0]
    more6_name=ganguly.name
}


let more4=sachin_value_array[1];
let more4_name=sachin.name;

if (sehwag_value_array[1]>more4) {
    more4=sehwag_value_array[1]
     more4_name=sehwag.name
}
if (yuvraj_value_array[1]>more4) {
    more4=yuvraj_value_array[1]
    more4_name=yuvraj.name
}
if(dravid_value_array[1]>more4) {
    more4=dravid_value_array[1]
    more4_name=dravid.name
}
if (virat_value_array[1]>more4) {
    more4=virat_value_array[1]
    more4_name=virat.name
}
if (ganguly_value_array>more4) {
    more4=ganguly_value_array[1]
    more4_name=ganguly.name
}


let morerun=sachin_value_array[2];
let morerun_name=sachin.name;

if (sehwag_value_array[2]>morerun) {
    morerun=sehwag_value_array[2]
     morerun_name=sehwag.name
}
if (yuvraj_value_array[2]>morerun) {
    morerun=yuvraj_value_array[2]
    morerun_name=yuvraj.name
}
if(dravid_value_array[2]>morerun) {
    morerun=dravid_value_array[2]
    morerun_name=dravid.name
}
if (virat_value_array[2]>morerun) {
    morerun=virat_value_array[2]
    morerun_name=virat.name
}
if (ganguly_value_array>morerun) {
    morerun=ganguly_value_array[2]
    morerun_name=ganguly.name
}

console.log("Most Fours : " +more4_name)
console.log("Most Six : " +more6_name)
console.log("Most Runs : " +morerun_name)










