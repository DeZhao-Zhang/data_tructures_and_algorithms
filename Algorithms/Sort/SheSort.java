public class SheSort {
    public static void sort(Comparable[] a){
        int N = a.length;
        int h = 1;

        while (h<N/3){
            h=3*h+1
        }

        while (h>=1){
            // 为什么从h开始 而不是从0开始呢？？
            // 需要从h到n全都对比吗？？
            for (int i=h;i<N;i++){
                for (int j=i;j >= h && less(a[j], a[j-h]);j = j - h){
                    exch(a, j, j - h);
                }
            }
            h = h / 3;
        }
    }
}