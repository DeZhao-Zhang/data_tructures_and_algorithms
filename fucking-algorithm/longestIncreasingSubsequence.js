/**
 * 使用纸牌的方式 求最长递增子序列
 * @param data
 * @returns {number}
 */
function pokerLIS(data){
    let heap = new Array(data.length)
    let numLIS=0; // LIS的长度

    // 遍历数组
    data.forEach(function (value){
        for (let i=0; i<heap.length; i++){
            let array = heap[i];

            if (array == undefined){    // 如果元素堆为空或者遍历已有元素堆均不满足需求
                array = []
                array.push(value)
                heap[i] = array;
                numLIS ++;
                break
            } else if (array[array.length - 1] >= value ){     // 从左到右 第一个满足需求的元素堆
                array.push(value);
                break
            }
        }
    })

    return numLIS;
}

/**
 * 二分法的方式 求解最长递增子序列的长度
 * @param data
 * @returns {number}
 */
function binaryLIS(data){
    let heap = new Array(data.length)
    let heapNum = 0

    data.forEach(function (value){

        // 如果未能查询到合适的元素堆
        if (!binarySearch(0, heapNum)){
            let array = []
            array.push(value)
            heap[heapNum] = array
            heapNum ++;
        }

        // 二分法寻找合适的元素堆
        function binarySearch(start, end){

            let half;
            // 截至条件
            if (start >= end - 1){

                let array = heap[start]
                // 如果元素堆均为空
                if (array == undefined){
                    return false
                }

                if (array[array.length - 1] >= value){ // 如果该元素堆符合条件
                    array.push(value)
                    return true
                }else {
                    return false    // 如果该元素堆不符合条件
                }
            } else {
                half =  Math.floor((start + end) / 2);     // 寻找中间元素位置

                let array = heap[half]

                if (array[array.length - 1] < value){   // 如果该元素堆的最上层元素 小于新元素 搜索右侧
                    return binarySearch(half + 1, end)
                }else {
                    if (!binarySearch(start, half)){    // 搜索左侧且失败 则将新元素放在中间元素堆上 返回true
                        array.push(value);
                        heap[heapNum] = array
                        return true
                    }else {    // 搜素左侧成功 返回true
                        return true
                    }
                }

            }
        }
    })

    for (let i=0; i<heap.length; i++){
        let array = heap[i];

        if (array == undefined){
            return i;
        }
    }
}


/**
 * 求一个数组的最长递增子序列的长度
 * @param data
 * @returns {number}
 */
function longestIncreasingSubsequence(data){
    let dp = new Array(data.length).fill(1)
    for (let i=1; i<data.length;i++){
        for (let j=0;j<i;j++){
            if (data[j] < data[i]){
                dp[i] = Math.max(dp[j]+1, dp[i])
            }
        }
    }

    let max_length = 0
    dp.forEach(function (value){
        max_length = Math.max(value, max_length);
    })

    return max_length
}


// test the time complexity
function GetRandomNum(Min,Max)
{
    const Range = Max - Min;
    const Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}

const numList = [1000, 10000, 100000]
numList.forEach(function (num){
    let data = []
    for (let i=0;i<num;i++){
        data.push(GetRandomNum(0, 1000000))
    }

    console.time(`动态规划方式求解数组长度为 ${num} 的最长递增子序列所需时间为`);
    // longestIncreasingSubsequence(data)
    console.log(`动态规划方式求解数组长度为 ${num} 的最长递增子序列,结果为 ${longestIncreasingSubsequence(data)}`)
    console.timeEnd(`动态规划方式求解数组长度为 ${num} 的最长递增子序列所需时间为`);

    console.time(`纸牌法 求解数组长度为 ${num} 的最长递增子序列所需时间为`);
    // binarySearch(data)
    console.log(`纸牌法 求解数组长度为 ${num} 的最长递增子序列所需时间为,结果为 ${pokerLIS(data)}`)
    console.timeEnd(`纸牌法 求解数组长度为 ${num} 的最长递增子序列所需时间为`);
    //
    console.time(`二分法方式 求解数组长度为 ${num} 的最长递增子序列所需时间为`);
    // binarySearch(data)
    console.log(`二分法方式 求解数组长度为 ${num} 的最长递增子序列所需时间为,结果为 ${binaryLIS(data)}`)
    console.timeEnd(`二分法方式 求解数组长度为 ${num} 的最长递增子序列所需时间为`);

    console.log("\n")

})