class LFU{
    constructor(capacity) {
        this.keyValue = new Map();
        this.capacity = capacity;
        this.cache = null;
    }

    /**
     * 获取某个key对应的value
     * @param key
     */
    get(key){
        if (this.keyValue.has(key)){
            // 频率加一
            return this.keyValue.get(key);
        }

        return -1;
    }

    /**
     * 新增一个节点
     * @param key
     * @param value
     */
    put(key, value){
        if (this.keyValue.has(key)){
            // 删除之前的节点
            // 新增节点
            // fre ++
            return
        }

        if (this.capacity == this.cache.size){
            // 移除元素

        }
        // 新增元素
        return;

    }
}