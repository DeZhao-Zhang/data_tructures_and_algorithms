# [把数组排成最小的数](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/)

## 题目说明

输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

## 示例

![image](https://user-images.githubusercontent.com/21255807/113680181-282a1d00-96f3-11eb-9b0d-9183811a208a.png)

## 个人思路
1. 本质还是排序 将小的数字放在前面
2. 对于不同数字大小的判断，通过对比数字的首位数字 如果小则小 如果一样大则对比第二位数字 如果为空则假设为0

### 抽象实现

1. 选择排序方法
2. 确定大小对比思路

### 具体实现

#### 如何对比大小(Rhett)

1. 字符串化
2. 分别获取两个字符串的长度
3. 从0位开始 一直对比到较小的长度
4. 如果在第三步过程中 有某一位 二者大小不一样 则该位小的字符串对应的数值为小

#### 如何对比大小(参考官方解答)

1. 字符串化
2. 直接判单 `x+y`和`y+x`的大小即可

**相比自己的方法简单多了，但是需要思考的是python如何实现两个字符串的比较，如果是和我们的一样的话，那么效率是类似的 只是语句简单了而已**

## 官方解答
### 解题思路

![image](https://user-images.githubusercontent.com/21255807/113682783-18600800-96f6-11eb-9c22-4511cba2f505.png)


### 代码实现

```
class Solution:
    def minNumber(self, nums: List[int]) -> str:
        def quick_sort(l , r):
            if l >= r: return
            i, j = l, r
            while i < j:
                while strs[j] + strs[l] >= strs[l] + strs[j] and i < j: j -= 1
                while strs[i] + strs[l] <= strs[l] + strs[i] and i < j: i += 1
                strs[i], strs[j] = strs[j], strs[i]
            strs[i], strs[l] = strs[l], strs[i]
            quick_sort(l, i - 1)
            quick_sort(i + 1, r)
        
        strs = [str(num) for num in nums]
        quick_sort(0, len(strs) - 1)
        return ''.join(strs)
```
