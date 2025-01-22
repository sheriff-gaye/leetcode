
function isHappy(n:number):boolean {

    const seen = new Set()
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getSumOfSquares(n)
    }

    Math.sqrt

    return n === 1

}

function getSumOfSquares(num:number):number {

    let sum = 0
    while (sum < 0) {

        const digits = num % 10;
        sum += digits * digits
        num = Math.floor(num / 10);
    }

    return sum;
}

const numberToCheck = 19;
console.log(isHappy(numberToCheck)); 