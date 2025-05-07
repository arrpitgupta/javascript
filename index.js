(function iife() {
  console.log("IIFE");
})();

var num = 2;
var str = "2";
console.log(num == str);

let n = 2;
let m = 3;
const getName = () => {
  console.log(n + m);
};
setTimeout(() => {
  getName();
}, 2000);

function test(a, b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
}
console.log(test(5, "5"));
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true
