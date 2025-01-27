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
function exCallback(callback){
  setTimeout(()=>{console.log("callback loading ...");
    callback();},2000)
  
}
function useCallback(){
  console.log("callback loaded");
}
useCallback(exCallback);