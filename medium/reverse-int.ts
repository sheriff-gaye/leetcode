function reverse(x: number): number {
    const reversed = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    
    if (reversed > 2**31 - 1 || reversed < -(2**31)) {
        return 0;
    } else {
        return reversed;
    }
}


console.log(reverse(9646324351)); // Output: 0
