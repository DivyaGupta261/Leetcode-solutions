/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let firstIndex = 0;
    let secondIndex = -1;
    let i = 0;
    nums.every((num, index) => {
        firstIndex = index;
        for(i=nums.length -1; i > index; i--) {
            if ((num + nums[i]) == target) {
                secondIndex = i;
                break;
            }
        }
        if ((secondIndex > -1) && nums[secondIndex] != undefined && ((num + nums[secondIndex]) == target)) return false;
        
        return true;
    });
    if ((nums[firstIndex] + nums[secondIndex]) == target) {
        return [firstIndex, secondIndex];
    }
    return false;
    
};
