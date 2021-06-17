// // var x, sum = 0;
// // for (x = 1; x <= 10009; x += 2){

// //   sum += x;
// // }
// //  newFunction();
// // if(sum%2 ==0){
// //  console.log("this is an even number: " +sum );
// // }
// // else{
// //     console.log("this is not an even number");
// // }

// // function newFunction() {
// //     return sum;
// // }

function factorial(n) {
  let fact = 1;
  if (n == 0 || n == 1) {
    return fact;
  } else {
    for (var i = n; i >= 1; i--) {
      fact = fact * i;
    }
    return fact;
  }
}
let n = 8;
fact = factorial(n);
console.log('the factorial of ' + n + ' is ' + fact);
