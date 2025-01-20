
// using the sum of two totalsum- actual sum to get tyhe missin number

function missingNumber(nums:number[]){

   const max=Math.max(...nums);
   const actualProduct=nums.reduce((a,b)=>a+b,0)
   let products=0

   for (let i=1;i<=max;i++){
    products +=i
   }

   return products-actualProduct

   

}

console.log(missingNumber([3, 2, 1,5])); // 4