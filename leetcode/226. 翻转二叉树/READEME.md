# 翻转二叉树

## 题目说明
**翻转一棵二叉树。**
## 示例
![image](https://user-images.githubusercontent.com/21255807/114700130-b3d72580-9d53-11eb-9f61-fe56173c3151.png)

## 个人思路
### 抽象实现
1. 按照递归的方式
- 交换每个节点的左右子节点
- 分别翻转左右子节点
### 具体实现
```
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if not root:
            return

        temp = root.left
        root.left = self.invertTree(root.right)
        root.right = self.invertTree(temp)
        return root
```
## 官方解答
![image](https://user-images.githubusercontent.com/21255807/114700996-d61d7300-9d54-11eb-8edb-94cf82c3e6d4.png)

