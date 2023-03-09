// 1. 一个包含n个元素的数组
// 2. from k(0- n-2) compare k and k+1, if a(k) is bigger, change, then a(n-1) is the max
// 3. from k(0- n-3) compare k and k+1, if a(k) is bigger, change, then a(n-2) is the max
// use array to solve this, then the change is o(1)
// use linked solve this, the change is o(1), but is complex to realise


class BubbleSort{
    /**
     * 升序排列
     * @param array
     * @returns {*}
     */
    static sortAsc(array){
        let size = array.length;
        if (size < 2){
            return array;
        }else {
            size --
            while (size > 0){
                for (let i=0;i<size;i++){
                    let a = array[i]
                    let b = array[i+1]
                    if (a > b){
                        array[i] = b;
                        array[i+1] = a;
                    }
                }
                size--
            }
        }
        return array;
    }

    /**
     * 降序排列
     * @param array
     * @returns {*}
     */
    static sortDes(array){
        let size = array.length;
        if (size < 2){
            return array;
        }else {
            size --
            while (size > 0){
                for (let i=0;i<size;i++){
                    let a = array[i]
                    let b = array[i+1]
                    if (a < b){
                        array[i] = b;
                        array[i+1] = a;
                    }
                }
                size--
            }
        }
        return array;
    }
}

const data1 = [4, 1]
const data2 = [1, 4, 2, 5, 6]
const data3 = [4]

// test the function
console.log("升序排列: " + "输入数据: " + data1 + "  排序结果数据: " + BubbleSort.sortAsc(data1))
console.log("升序排列: " + "输入数据: " + data2 + "  排序结果数据: " + BubbleSort.sortAsc(data2))
console.log("升序排列: " + "输入数据: " + data3 + "  排序结果数据: " + BubbleSort.sortAsc(data3))


console.log("降序排列: " + "输入数据: " + data1 + "  排序结果数据: " + BubbleSort.sortDes(data1))
console.log("降序排列: " + "输入数据: " + data2 + "  排序结果数据: " + BubbleSort.sortDes(data2))
console.log("降序排列: " + "输入数据: " + data3 + "  排序结果数据: " + BubbleSort.sortDes(data3))

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

    console.time(`bubble sort for num ${num}`);
    BubbleSort.sortAsc(data)
    console.timeEnd(`bubble sort for num ${num}`);

})