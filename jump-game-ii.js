/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums) {
    map = new Map();
    length = nums.length;
    return getJumps(nums);
};

var map;
var length = 0;

var getJumps = function(nums) {
    if (nums.length === 1) return 0;
    if (nums[0] === 0) return Infinity;
    if (nums.length === 0) return Infinity;
    let minJump;
    if (nums[0]===1) {
        let jumps = nums.findIndex(n => n>1);
        if (jumps < 0) return nums.length-1;
        return jumps + getJumps(nums.slice(jumps, nums.length));
    }
    for (let i=nums[0];i>=1 && nums[0]>1;i--) {
        let minJumpTemp = (map.get(length - nums.length) || getJumps(nums.slice(i, nums.length)));
        minJump = minJump != undefined && minJumpTemp > minJump ? minJump : minJumpTemp;
        if (minJump ===1) break;
    }
    if (nums[0] >1) {
        map.set((length - nums.length), minJump);
    }
    return (1 + minJump);
} 
