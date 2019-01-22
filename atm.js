class Bill {
  constructor(v, q) { //value, quantity
    this.myValue = v;
    this.myQuantity = q;
  }
}

var myBox = [];
var delivered = [];
myBox.push(new Bill(50, 3));
myBox.push(new Bill(20, 2));
myBox.push(new Bill(10, 2));

var money = 210;
var div = 0;
var papers = 0;
