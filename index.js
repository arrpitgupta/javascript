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
