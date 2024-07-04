// 1st

function calcSumOfNum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(calcSumOfNum(8)(4));


// 2nd


const funcCyrrying = a => b => c => d => a + b + c + d;
console.log(funcCyrrying(4)(3)(5)(7));