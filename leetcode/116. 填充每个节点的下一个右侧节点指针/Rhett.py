# -*- coding:utf-8 -*-
# Author: Jhsy
# @Time: 2021/4/14 20:48

class Solution(object):
    def connect(self, root):
        """
        :type root: Node
        :rtype: Node
        """

        if not root:
            return
        else:
            self.connect_two_node(root.left, root.right)

        return root


    def connect_two_node(self, node1, node2):
        if not node1:
            return

        node1.next = node2

        self.connect_two_node(node1.left, node1.right)
        self.connect_two_node(node1.right, node2.left)
        self.connect_two_node(node2.left, node2.right)
