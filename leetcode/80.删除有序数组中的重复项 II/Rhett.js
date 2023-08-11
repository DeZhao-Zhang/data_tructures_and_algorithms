const removeDuplicates = function(nums) {

    let len = nums.length;
    if (len < 2){
        return len;
    }

    let left = 1;
    let value = nums[0];
    let num = 1;
    let index = 1;

    for (let right = 1; right < len; right ++){
        if (nums[right] != value){
            nums[left] = nums[right];
            left ++;
            value = nums[right];
            num = 1;
            index ++;
        } else if (num < 2){
            nums[left] = nums[right];
            left ++;
            value = nums[right];
            num++;
            index ++;
        }
    }

    console.log(nums);
    console.log(index);
    return index;
};


removeDuplicates([1, 1, 1, 2, 2, 3])
