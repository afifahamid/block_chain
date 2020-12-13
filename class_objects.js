class Rectangle {
    constructor(height, width) {
    this.h = height;
    this.w = width;
    }
    result() {
    console.log("The height of the Rectangle : ", this.h)
    console.log("The width of the Rectangle : ",this. w)
    }
   }

var area = new Rectangle(40,50);
area.result();
