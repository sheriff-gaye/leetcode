function largestOddNumber(num: string) {

    const nums = num.split('').map(Number);
    const maxOdd = nums.filter(num => num % 2 !== 0);
    return maxOdd.length > 0 ? maxOdd.join('') : '';


};

console.log(largestOddNumber("52")); // 5




