function triangleType(nums: number[]): string {

    if(nums[0]+nums[1]<=nums[2] || nums[1]+nums[2]<=nums[0] || nums[0]+nums[2]<=nums[1]){
        return "Not a triangle";
    }
    else if(nums[0]==nums[1] && nums[1]==nums[2]){
        return "Equilateral";
    }
    else if(nums[0]==nums[1] || nums[1]==nums[2] || nums[0]==nums[2]){
        return "Isosceles";
    }
    else{
        return "Scalene";
    }
    
};