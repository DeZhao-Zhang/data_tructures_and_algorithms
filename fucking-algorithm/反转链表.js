import Linked from "../fucking-algorithm/Linked.js";


let myLinked = new Linked();

myLinked.add(5);
myLinked.add(6);
myLinked.add(14);
myLinked.add(17);
myLinked.add(21);


myLinked.print()


// 实现迭代的方式 进行链表的反转
let cur = myLinked.head;
let pre = null;

while (cur != null){
    // 获取下一个节点
    let next = cur.next;

    // 对当前循环下的节点进行调整
    cur.next = pre;  // 调整方向
    myLinked.head = cur;   // 配置链表的头节点

    // 更新下一个循环的 cur 和 pre 节点
    pre = cur;
    cur = next;
}

myLinked.print()

// 递归的方式 进行链表的反转
// 什么叫做递归？？设定一个截至条件，在达到截止条件之前，先解决子问题

function inverse(node){
    if (node.next == null){
        return node;
    }

    // 通过last将链表最后的节点返回回去 并作为最后的头节点
    let last = inverse(node.next);

    // 将指向顺序反转
    node.next.next = node;
    // 打算循环嵌套
    node.next = null;
    return last;
}

myLinked.head = inverse(myLinked.head)
myLinked.print()