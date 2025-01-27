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
function exCallback(callback){
  console.log("callback loading ...");
  callback();
}
function useCallback(){
  console.log("callback loaded");
}
useCallback(exCallback);
