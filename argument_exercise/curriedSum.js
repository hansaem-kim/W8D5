// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
  
// console.log(sumThree(4, 20, 6));

function curriedSum(numArgs) {
  let numbers = [];
  // console.log(numbers)
  function _curriedSum(n) {
    // console.log("inside _curriedSum")
    // console.log(n)
    numbers.push(n);
    if (numbers.length === numArgs) {
      return numbers.reduce((a,b) => a+b, 0);
    } else {
      return _curriedSum
    }
  }
  return _curriedSum
}

// const sum = curriedSum(4);
// // console.log("----------------------------")
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs){
  let arguments1 = [];
  let that = this;
  function _curry(arg) {
    arguments1.push(arg);
    if (arguments1.length === numArgs) {
      // console.log(arguments1);
      // console.log(arg);
      // console.log(that);
      return that(...arguments1);
    } else{
      // console.log(arguments1);
      return _curry;
    }
  }
  return _curry;  
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.curry(3)(4)(20)(6));