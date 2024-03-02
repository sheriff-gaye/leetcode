
function sortedSquares(nums: number[]): number[] {
    return nums.map(num=>num*num).sort((a,b)=>a-b);
    
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]