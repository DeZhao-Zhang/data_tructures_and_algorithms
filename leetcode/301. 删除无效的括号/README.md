# [删除无效的括号](https://leetcode-cn.com/problems/remove-invalid-parentheses/)

## 题目说明
![image](https://user-images.githubusercontent.com/21255807/114502059-b6efea00-9c5d-11eb-8006-1d5bb0a99bca.png)

## 示例
![image](https://user-images.githubusercontent.com/21255807/114502087-c40cd900-9c5d-11eb-9862-f491e0f8d3fe.png)

## 个人思路
### 难点 20210413
1. 如何判断字符串有效
左括号为1，右括号为-1，从左到右遍历并加上对应的数值，如果：
- 最后的和为0
- 过程中和一直不为无负
则说明该字符串有效。

2. 如何决定删除的无效括号？
### 抽象实现

### 具体实现

## 官方解答



### 涉及知识点
1. 回溯算法
- [全排列](https://leetcode-cn.com/problems/permutations/)
- [N 皇后](https://leetcode-cn.com/problems/n-queens/)
2. 剪枝
3. 广度优先遍历
4. 括号相关题目
- [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
- [括号生成](https://leetcode-cn.com/problems/generate-parentheses/)
