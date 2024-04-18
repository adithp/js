let student = [
    {
        name: "anurag",
        class: 3,
        division:"A",
        marks: [10,15,25,22,20],
    },
    {
        name: "sojay",
        class: 3,
        division:"A",
        marks: [22,21,20,22,20],
    },
    {
        name: "roshin",
        class: 3,
        division:"A",
        marks: [25,22,19,20,8],
    },
    {
        name: "arbin",
        class: 3,
        division:"A",
        marks: [18,12,25,18,20],
    },
    {
        name: "adith",
        class: 3,
        division: "A",
        marks: [30,30,30,30,30],
    },
    {
        name: "anunand",
        class: 3,
        division: "A",
        marks: [35,30,30,30,35],
    },
]  
let temp ;
let t=0;
let a =[];
let mark = [];
for (i=0;i<student.length;i++) {
    let total=0;
    mark = student[i].marks;
    const sum = (test) => {
        total += test;
    }
    mark.forEach(sum);
    a[i]=total;
}
 for (i=0;i<a.length;i++) {
    if(a[t] < a[i+1]) {
        temp=a[i+1];
        t=i+1;
    }
    else {
        temp=a[t];
        
    }
 }
 console.log("mark:",temp);
 console.log("name:",student[t].name);