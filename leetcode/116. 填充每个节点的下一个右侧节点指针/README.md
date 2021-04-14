# 填充每个节点的下一个右侧节点指针

## 题目说明
![image](https://user-images.githubusercontent.com/21255807/114712773-0e2bb280-9d63-11eb-9266-94e6f95b9401.png)

## 示例
![image](https://user-images.githubusercontent.com/21255807/114712825-1c79ce80-9d63-11eb-87a2-d2337654a791.png)

## 个人思路
**递归遍历每个节点 并将其左节点的next指向右节点**
- 存在问题：左节点的右儿子如何和右节点的左儿子连接起来

**设计一个函数 传入两个节点 然后分别对每个节点进行递归 同时 将左节点的右儿子指向右节点的左儿子**
### 抽象实现

### 具体实现
- 初始解
```
class Solution(object):
    def connect(self, root):
        """
        :type root: Node
        :rtype: Node
        """

        if not root:
            return
        else:
            if root.left:
                root.left.next = root.right
                self.connect_two_node(root.left, root.right)

        return root


    def connect_two_node(self, node1, node2):
   
        if node1.left:
            node1.left.next = node1.right
            node1.right.next = node2.left
            node2.left.next = node2.right
            self.connect_two_node(node1.left, node1.right)
            self.connect_two_node(node2.left, node2.right)

```
- 修正解
```
"""
# Definition for a Node.
class Node(object):
    def __init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

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

```

- 回顾：
- - 没弄清楚每一个节点需要做的事情 
- - 本来每个函数的任务就是 将两个节点连接 然后 分别连接其对应的子节点
- - 自己原先的做法是 将两个节点的下一步做了 但是再深入一层 就会漏掉 **如果加上 又会重复计算**

- rhett 再修正版
```
class Solution(object):
    def connect(self, root):
        """
        :type root: Node
        :rtype: Node
        """

        if not root:
            return
        else:
            if root.left:
                root.left.next = root.right
                self.connect_two_node(root.left, root.right)

        return root


    def connect_two_node(self, node1, node2):
   
        if node1.left:
            node1.left.next = node1.right
            node1.right.next = node2.left
            node2.left.next = node2.right
            self.connect_two_node(node1.left, node1.right)
            self.connect_two_node(node1.right, node2.left)  # 增加一句 
            self.connect_two_node(node2.left, node2.right)
```
## 官方解答
1. 层次遍历
```
import collections 

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        
        if not root:
            return root
        
        # 初始化队列同时将第一层节点加入队列中，即根节点
        Q = collections.deque([root])
        
        # 外层的 while 循环迭代的是层数
        while Q:
            
            # 记录当前队列大小
            size = len(Q)
            
            # 遍历这一层的所有节点
            for i in range(size):
                
                # 从队首取出元素
                node = Q.popleft()
                
                # 连接
                if i < size - 1:
                    node.next = Q[0]
                
                # 拓展下一层节点
                if node.left:
                    Q.append(node.left)
                if node.right:
                    Q.append(node.right)
        
        # 返回根节点
        return root
```

2. 使用已建立的 next 指针

![image](https://user-images.githubusercontent.com/21255807/114717740-ee4abd80-9d67-11eb-8d4f-6a0a662da873.png)


## 知识点
[完美二叉树、完全二叉树、完满二叉树](https://blog.csdn.net/qq_30650153/article/details/82024648)
