

public class Sort {
    /**
     * 对输入的数据进行排序
     * @param data 输入的数据
     */
    public static void sort(Comparable[] data){

    }

    private static boolean less(Comparable v, Comparable w){
        return v.compareTo(w) < 0;
    }

    private static void exch(Comparable[] a, int i, int j){
        Comparable t = a[i];
        a[i] = a[j];
        a[j] = t;
    }

    private static boolean isSorted(Comparable[] a){
        for (int i=1;i<a.length;i++){
            if (less(a[i], a[i - 1])) return false;
            return true;
        }
    }

}