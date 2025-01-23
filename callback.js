function firstFunc(callback) {
  setTimeout(() => {
    console.log("First function");
    callback();
  }, 1000);
}
function secondFunc() {
  console.log("Second function");
}

firstFunc(secondFunc);
