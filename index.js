(function iife (){
  console.log("IIFE");
})();

var num = 2;
var str = "2";
console.log(num == str);

let n = 2;
let m = 3;
const getName = () => {
 console.log(n + m );
 
}
setTimeout(()=>{
getName();
},2000);

function firstFunc(callback){
  setTimeout(()=>{
    console.log("First function");
    callback();
  },1000)
  
}
function secondFunc(){
  console.log("Second function");

}

firstFunc(secondFunc);

function examplePromise(url){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve(`Data fetched successfully from ${url}`);
    } else {
        reject("Failed to fetch data");
    }
    },2000);
  })
}
examplePromise("https://api.example.com/data")
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.error(error); 
    })
    .finally(() => {
        console.log("Promise handling complete.");
    });






