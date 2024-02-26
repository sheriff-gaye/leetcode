
function missingNumber(nums: number[]): number {

    let missing = nums.length;

    for (let i = 0; i < nums.length; i++) {

        missing ^= i ^ nums[i];
    }

    return missing;
}

console.log(missingNumber([3, 2, 1,0,5])); // 2