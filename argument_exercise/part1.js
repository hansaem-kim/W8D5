function totalSum(arg){
    let sum = 0;
    for(let i = 0; i < arg.length; i++){
        sum += arg[i];
    }
    return sum;
}

// let arr = [1,5,3,2];
// console.log(totalSum(arr));

function totalSum2(...arg){
    let sum = 0;
    for(let i = 0; i < arg.length; i++){
        sum += arg[i];
    }
    return sum;
}

// console.log(totalSum2(1,5,3,2));

