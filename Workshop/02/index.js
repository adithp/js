let students = [
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
    let topper_name ="" ;
    let topper_mark = 0 ;
    students.forEach((student) => {
        let total= 0 ;
        student.marks.forEach((mark) => {
            total += mark;
        })
        if (topper_mark < total) {
            topper_mark = total;
            topper_name = student.name;
        }
    })
    console.log(topper_name);
    console.log(topper_mark);
