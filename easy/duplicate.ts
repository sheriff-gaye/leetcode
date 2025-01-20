// function containsDuplicate(nums: number[]): boolean {

//     const set = new Set();

//     for (let i = 0; i < nums.length; i++) {

//         if (set.has(nums[i])) {
//             return true;
//         }
//         set.add(nums[i]);
//     }

//     return false;

// };




function  containsDuplicate(nums:number[]){

    const set=new Set();

    for (let i=0 ; i< nums.length;i++){
        
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }

    return false



}

console.log(containsDuplicate([1, 2, 3,3]));
