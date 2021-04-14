# 二叉树展开为链表

## 题目说明
给你二叉树的根结点 `root` ，请你将它展开为一个单链表：

- 展开后的单链表应该同样使用 `TreeNode` ，其中 `right` 子指针指向链表中下一个结点，而左子指针始终为 `null` 。
- 展开后的单链表应该与二叉树 先序遍历 顺序相同。

## 示例
![image](https://user-images.githubusercontent.com/21255807/114702882-34e3ec00-9d57-11eb-8801-e0b64647cbe4.png)

## 个人思路
### 抽象实现
- 有问题的
1. 按照先序遍历的方式进行遍历
2. 将节点逐步加入

- 改进
1. 将 `root` 的左子树和右子树拉平。
2. 将 `root` 的右子树接到左子树下方，然后将整个左子树作为右子树。
### 具体实现
```
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def flatten(self, root):
        """
        :type root: TreeNode
        :rtype: None Do not return anything, modify root in-place instead.
        """
        if not root:
            return 
        
        self.flatten(root.left)
        self.flatten(root.right)

        left = root.left
        right = root.right

        root.left = None
        root.right = left

        p = root
        while p.right != None:
            p = p.right
        
        p.right = right

        return root
```
## 官方解答
