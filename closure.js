function outerFunction() {
  let outerVariable = "I'm from the outer scope!";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
const closureFunction = outerFunction();
closureFunction();
