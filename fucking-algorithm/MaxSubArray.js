/**
 * 计算最大子数组的和
 * @param data
 * @returns {number}
 */
function maxSubArray(data){

    let dp = new Array(data.length).fill(Number.MIN_VALUE);
    dp[0] = data[0]
    for (let i=1;i<data.length;i++) {
        dp[i] = Math.max(dp[i - 1] + data[i], data[i])
    }

    let max = Number.MIN_VALUE;
    dp.forEach(value => max = Math.max(max, value))

    return max
}


/**
 * 计算最大子数组的和(优化空间复杂度)
 * @param data
 * @returns {number}
 */
function maxSubArray2(data){

    let res, dp;
    res = dp = data[0]

    for (let i=1;i<data.length;i++) {
        dp = Math.max(dp + data[i], data[i])
        res = Math.max(res, dp)
    }

    return res
}

// test the time complexity
function GetRandomNum(Min,Max)
{
    const Range = Max - Min;
    const Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}

const numList = [1, 10, 100, 1000, 10000, 100000]
numList.forEach(function (num){
    let data = []
    for (let i=0;i<num;i++){
        data.push(GetRandomNum(0, 1000))
    }

    console.time(`动态规划方式求解数组长度为 ${num} 的最大子数组和所需时间为`);
    console.log(`动态规划方式求解数组长度为 ${num} 的最大子数组和,结果为 ${maxSubArray(data)}`)
    console.timeEnd(`动态规划方式求解数组长度为 ${num} 的最大子数组和所需时间为`);

    console.time(`动态规划方式求解数组长度为 ${num} 的最大子数组和所需时间为`);
    console.log(`动态规划方式求解数组长度为 ${num} 的最大子数组和,结果为 ${maxSubArray2(data)}`)
    console.timeEnd(`动态规划方式求解数组长度为 ${num} 的最大子数组和所需时间为`);

    console.log("\n")

})