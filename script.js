function sumOfNum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sumOfNum(8)(4));
