
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

const numList = [10, 100, 1000, 10000, 100000]
numList.forEach(function (num){
    let data = []
    for (let i=0;i<num;i++){
        data.push(GetRandomNum(0, 1000))
    }

    console.time(`求解数组长度为 ${num} 的最长递增子序列所需时间为`);
    longestIncreasingSubsequence(data)
    console.timeEnd(`求解数组长度为 ${num} 的最长递增子序列所需时间为`);

})