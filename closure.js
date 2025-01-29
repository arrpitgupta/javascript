function outerFunction() {
  let outerVariable = "I'm from the outer scope!";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
const closureFunction = outerFunction();
closureFunction();
function outer() {
  let outerVar = "I'm outside!";
  function inner() {
    console.log(outerVar); // Accesses outerVar
  }
  return inner;
}

const closureFunc = outer();
closureFunc(); // "I'm outside!"