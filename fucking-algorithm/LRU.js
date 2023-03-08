class Node{
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

/**
 * 双向链表
 */
class DoubleList{

    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.tail.prev = this.head;
        this.head.next = this.tail;
        this.size = 0;
    }

    /**
     * 在链表结尾新增数据
     * @param node
     */
    addLast(node){
        node.next = this.tail;
        node.prev = this.tail.prev;

        this.tail.prev.next = node;
        this.tail.prev = node;

        this.size++;
    }

    /**
     * 移除指定节点
     * @param node
     */
    remove(node){
        console.log(node)
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }

    /**
     * 移除第一个节点
     * @returns {null}
     */
    removeFirst(){
        if (this.head.next == this.tail){
            return null
        }

        let first = this.head.next;
        this.remove(first);
        return first;
    }

    getSize(){
        return this.size;
    }
}

class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.cache = new DoubleList();
    }

    /**
     * 使某个已经存在的信息 变成最新使用的
     * @param key
     */
    makeRecently(key){
        const node = this.map.get(key);
        this.cache.remove(node);
        this.cache.addLast(node);
    }

    /**
     * 新增信息
     * @param key
     * @param value
     */
    addRecently(key, value){
        const node = new Node(key, value);
        this.cache.addLast(node);
        this.map.set(key, node);
    }

    /**
     * 移除最少使用的信息
     */
    removeLeastRecently(){
        const node = this.cache.removeFirst();
        this.map.delete(node.key);
    }

    /**
     * 新增信息
     * @param key
     * @param value
     */
    put(key, value){
        if (this.map.has(key)){
            this.makeRecently(key);
            return;
        }

        if (this.cache.getSize() == this.capacity){
            this.removeLeastRecently();
        }

        this.addRecently(key, value);
    }
}

const lru = new LRU(2);
lru.put(1, "zdz");
lru.put(2, "rhett");
lru.put(1, "zdz");
lru.put(3, "zhang");
console.log(lru.map);