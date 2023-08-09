let removeElement = function(nums, val) {

    let ln = nums.length;
    let left = 0;
    for (let i = 0; i < ln; i++){
        if (nums[i] != val){
            nums[left] = nums[i];
            left ++;
        }
    }

    console.log(nums)

    return left;
};

console.log(removeElement([3,2,2,3], 3))