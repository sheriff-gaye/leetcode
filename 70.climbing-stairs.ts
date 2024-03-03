/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    if(n==1){
        return 1;
    }
    if (n===2){
        return 2;
    }
    let a=1 , b=2, c=0;
    for (let i=3; i<=n; i++){
        c = a+b;
        a = b;
        b = c;
    }
    return c;    
};
// @lc code=end

