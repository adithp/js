function add(a,b) {
    if(isNaN(a) || isNaN(b)) {
        throw "Not A number !!!";
    }
    return a+b
}
try {
    let x = add(10,"gf");
} catch(error) {
    console.log(error);
} finally {
    console.log("hfds");
}
let today = new Date();
console.log(Math.floor(Math.random()*100));

console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.toString())
let some = new Date(2004,10,8,11,10,30);
console.log(some.toString())
if (today > some) {
    console.log("today is after some")
}
else {
    console.log("today is beforew some")
}
let student = {
    "name":"adith"
}

let str = '{"name":"adith", "age":30,"city":"newyork"}';
let constr = JSON.parse(str);
console.info(constr.age);

let store2 = 
    {
        name: "Apple",
        qty: 300,
        price: 35,
    }

    let store21=JSON.stringify(store2);
    console.log(store21);