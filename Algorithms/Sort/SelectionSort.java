public class SelectionSort extends Sort{
    public static void sort(Comparable[] a){
        int N = a.length;
        for (int i=0;i<N;i++){
            int min=i;
            for (j=i+1;j<N;j++){
                if (less(a[min], a[j])){
                    min = j;
                }
            }

            exch(a, i, min)

        }
    }
}