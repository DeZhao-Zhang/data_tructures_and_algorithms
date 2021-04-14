# -*- coding:utf-8 -*-
# Author: Jhsy
# @Time: 2021/4/14 19:16

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
