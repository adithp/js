// <12 -good mro
// 12 16 after
//16 20 eve

let time=25;

const calc= (time) => {
    if (time <= 12 ) {
       return "good mornign";
    }
    else if ( time > 12 && time <= 16) {
        return "good afternoon";
    }
    else if (time > 16 && time <=20) {
        return "good evening";
    }
    else if (time > 20 && time <= 24) {
        return "good night";
    }
    else {
        return "wrong time";
    }
   
}
console.log(calc(time));