# 上升下降字符串

## 题目说明

![image](https://user-images.githubusercontent.com/21255807/113673515-abe00b80-96eb-11eb-90c9-5df9dbd7a8b1.png)

## 示例

![image](https://user-images.githubusercontent.com/21255807/113673923-27da5380-96ec-11eb-9a38-f299a4234e6e.png)

## 个人思路

### 问题
1. 如何判断字符的大小：使用`ord()`函数 获得每个字符的大小
2. 如何过滤一二步或者四五步中已经选择的字符
3. 如何在一轮循环结束之后过滤已经输出的字符

### 抽象实现
1. 构建一个数组，每个元素对应 一个字符及其对应的个数，并按字符的顺序进行从小到大排列
2. 从左到右 分别弹出每个元素的对应的字符 并将个数减一 如果个数为0 删除
3. 从右到左 分别弹出每个元素对应的字符 并将个数减一 如果个数为0 删除
4. 当数组长度为0的时候 结束程序
### 具体实现
#### 问题(参考了官方解答)
1. 如果使用`ord()`函数来获取字符的大小 如何才能更好的进行排序呢？？
- 我们知道字符的范围有限`a-z`,可以创建大小为26的桶 然后按字符大小与`a`的差值来进行放入
2. 如果这样放的话 如何判断循环结束呢？
- 通过对比拼接字符的长度和原始字符的长度 来进行判断循环是否结束！
## 官方解答

### 代码
```buildoutcfg
class Solution:
    def sortString(self, s: str) -> str:
        num = [0] * 26
        for ch in s:
            num[ord(ch) - ord('a')] += 1
        
        ret = list()
        while len(ret) < len(s):
            for i in range(26):
                if num[i]:
                    ret.append(chr(i + ord('a')))
                    num[i] -= 1
            for i in range(25, -1, -1):
                if num[i]:
                    ret.append(chr(i + ord('a')))
                    num[i] -= 1

        return "".join(ret)
```
