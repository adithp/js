class Car {
    constructor (mileage ,length,boot_space ) {
    this.mileage = mileage;
    this.length = length;
    this.boot_space = boot_space;
    }
    
}
Details = () => {
    let newcar = new Car(10,4,300);
    document.body.innerHTML += "Mileage:" + newcar.mileage+ "<br>";
    document.body.innerHTML += "Lenth:" + newcar.length + "<br>";
    document.body.innerHTML += "BootSpace:" + newcar.boot_space;

}

Details();