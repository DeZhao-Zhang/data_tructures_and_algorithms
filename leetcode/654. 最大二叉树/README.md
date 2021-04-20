# 最大二叉树

## 题目说明
![image](https://user-images.githubusercontent.com/21255807/115386529-1759cb00-a20c-11eb-9b54-b00a87ebc2e4.png)

## 示例
![image](https://user-images.githubusercontent.com/21255807/115386546-1fb20600-a20c-11eb-96af-5dabedd252cb.png)

## 个人思路
### 抽象实现
1. 找到当前输入的最大值及对应的index
2. 对左侧和右侧分别遍历
### 具体实现
```
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def constructMaximumBinaryTree(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """

        if len(nums) == 0:
            return None
        
        value = max(nums)
        index = nums.index(value)

        root = TreeNode(value)

        root.left = self.constructMaximumBinaryTree(nums[0: index])
        root.right = self.constructMaximumBinaryTree(nums[index+1: ])

        return root
```
## 官方解答
![image](https://user-images.githubusercontent.com/21255807/115387495-5b999b00-a20d-11eb-9cac-5b422b4abb68.png)
