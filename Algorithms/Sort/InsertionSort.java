public class InsertionSort extends Sort{
    public static void sort(Comparable[] a){
        for (int i=1;i<a.length;i++){
            // 很巧妙的在比较的过程中同时进行位置的交换，实现数据整体右移的效果
            for (int j=i;j>0 && less(a[j], a[j-1]);j--){
                exch(a, j, j-1);
            }
        }
    }
}