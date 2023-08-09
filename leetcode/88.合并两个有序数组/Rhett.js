const merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j]);
            nums1.pop();
            j++;
            i++;
            m++;
        } else {
            i++;
        }
    }

    if (i == m) {
        for (let k = j; k < n; k++) {
            nums1[i] = nums2[k];
            i++;
        }
    }

    console.log(nums1)

};


merge([1,2,3,0,0,0], 3, [2, 5, 6], 3)

merge([1], 1, [], 0)

merge([0], 0, [1], 1)