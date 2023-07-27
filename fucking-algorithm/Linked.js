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
    }

    add(value){
        if (this.head.value == null){
            this.head = new Node(value);
            this.cur = this.head;
        } else {
            this.cur.next = new Node(value);
            this.cur = this.cur.next;
        }
    }

    print(){

        let out = []

        let start = this.head;
        while (start != null){
            out.push(start.value)
            start = start.next
        }

        console.log(`链表信息为: ${out.toString()}`)
    }

}

export default Liked;