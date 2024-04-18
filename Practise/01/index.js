class Student {
    constructor (name,student_class,division,marks) {
    this.name = name;
    this.student_class = student_class;
    this.division = division;
    this.marks = marks;
    }
    total  ()  {
        let mark = this.marks;
        let all_total = 0 ;
      
        for (let i=0;i < mark.length;i++) {
           all_total =all_total+mark[i]
        }
        return all_total;
    }
    
}
let student = new Student("Adith",10,"A",[10,20,30,40]);

console.log(student.total())