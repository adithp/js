let store1 = [
    {
        name: "Apple",
        qty: 500,
        price: 50,
    },
    {
        name: "Orange",
        qty: 100,
        price: 40,
    },
    {
        name:"Mango",
        qty: 200,
        price: 100,
    },

];
let store2 = [
    {
        name: "Apple",
        qty: 300,
        price: 35,
    },
    {
        name: "Orange",
        qty: 120,
        price: 50,
    },
    {
        name:"Mango",
        qty: 150,
        price: 85,
    },

];
let store3 = [
    {
        name: "Apple",
        qty: 400,
        price: 50,
    },
    {
        name: "Orange",
        qty: 120,
        price: 50,
    },
    {
        name:"Mango",
        qty: 150,
        price: 65,
    },

];

function cal (store) {
    let total = 0;
    store.forEach((fruits) => {
        let cre=fruits.qty*fruits.price;
        total +=cre;  
    });
    return total;
}
let store1_total = cal(store1);
let store2_total = cal(store2);
let store3_total = cal(store3);

let total_cost = {
    store1:store1_total,
    store2:store2_total,
    store3:store3_total,
}
console.log(total_cost);
