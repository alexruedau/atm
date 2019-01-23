class Bill {
  constructor(v, q) { //value, quantity
    this.myValue = v;
    this.myQuantity = q;
  }
}

function giveMoney() {
  var t = document.getElementById("money");
  money = parseInt(t.value);
  for (var bi of myBox) {
    if (money > 0) {
      div = Math.floor(money / bi.myValue);
      if(div > bi.myQuantity) {
        papers = bi.myQuantity;
      } else {
        papers = div;
      }

      delivered.push(new Bill(bi.myValue, papers));
      money = money - (bi.myValue * papers);
      //money -= (bi.myValue * papers); 
    }
  }

  if (money > 0) {

    myResult.innerHTML = "I'm poor! :()";
  } else {
    for (var d of delivered) {
      if (d.myQuantity > 0) {
        myResult.innerHTML += d.myQuantity + " bills of $" + d.myValue + "<br />";
      }
    }
  }

}



var myBox = [];
var delivered = [];
myBox.push(new Bill(50, 10));
myBox.push(new Bill(20, 30));
myBox.push(new Bill(10, 10));

var money = 0;
var div = 0;
var papers = 0;

var myResult = document.getElementById("myResult");
var btn = document.getElementById("withdraw");
document.addEventListener("click", giveMoney);
