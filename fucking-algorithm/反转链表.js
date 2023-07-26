import Linked from "../fucking-algorithm/Linked.js";


let myLinked = new Linked();

myLinked.add(5);

myLinked.add(6);

myLinked.add(14);

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
