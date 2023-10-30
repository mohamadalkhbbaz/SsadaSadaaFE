class RED {
    printRED = () => {
        console.log("Print Red Color");
    }
}

class Car extends RED
{
    constructor(color){
        super();
        this.color = color;
    }

    // color = "red";
    printColor = (color) => {
        console.log(this.color+ " " + color);
    }
}
export default Car;

