/**
 * node 节点
 */
class Node{

    constructor(value) {

        this.value = value;

        this.next = null;
    }
}


/**
 * 链表类
 */
class Liked{

    constructor() {
        this.head = new Node(null);
        this.cur = this.head;
    }

    add(node){
        if (this.head.value = null){
            this.head = node;
        } else {
            this.cur.next = node;
            this.cur = node;
        }
    }

}

export default Liked;