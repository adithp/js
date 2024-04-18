let today = new Date().getDay();
let day ="";
switch (today) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Thesday";
        break;  
    case 3:
        day = "Wenesday";
        break;
    case 4:
        day = "thersday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    default:
        day = "I don't know";    
}
console.log(day);