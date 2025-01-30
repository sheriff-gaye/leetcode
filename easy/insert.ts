// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the 
// index where it would be if it were inserted in order.

function InsertPosition(nums:number[],target:number):number{

    let left=0
    let right=nums.length - 1

    while(left<=right){

        const mid=Math.floor((left+right)/2)

        if(nums[mid]===target){
            return target
        }

        else if(nums[mid]<target){
            left= mid + 1
        }

        else{
            right =mid - 1
        }
    } 
    
    
    return left



}


console.log(InsertPosition([1,3,5,6],7))