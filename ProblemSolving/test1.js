function findOppositeNumber(n, input) {
    if (input <= n/2) return (n+2*input)/2;
    else {
        let _input = n - input;
        let _opposite = findOppositeNumber(n,_input)
        return n - _opposite;
    }
}
console.log(findOppositeNumber(10,2));
console.log(findOppositeNumber(10,6));
