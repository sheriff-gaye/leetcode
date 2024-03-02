/*
 * @lc app=leetcode id=796 lang=typescript
 *
 * [796] Rotate String
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
    if(s.length !== goal.length) return false;
    return (s+s).includes(goal);
    
};
// @lc code=end


