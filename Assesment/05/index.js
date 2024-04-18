let a = 5;
let b =10.5;
if (Number.isInteger(a) && Number.isInteger(b) ) {
if (a<b) {
    console.log("b is big")
}
else {
    console.log("a is big")
}
}
else {
    console.error("please enter a integer value");
}