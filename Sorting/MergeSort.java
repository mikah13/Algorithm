import java.util.ArrayList;
import java.util.Scanner;

class MergeSort {

    static void pushAndShift(ArrayList<Integer> a, ArrayList<Integer> b) {
        a.add(b.get(0));
        b.remove(0);
    }

    static ArrayList<Integer> merge(ArrayList<Integer> a, ArrayList<Integer> b) {

        ArrayList<Integer> k = new ArrayList<Integer>();
        while (a.size() != 0 && b.size() != 0) {
            pushAndShift(k, a.get(0) > b.get(0) ? b : a);
        }
        while (a.size() != 0) {
            pushAndShift(k, a);
        }
        while (b.size() != 0) {
            pushAndShift(k, b);
        }
        return k;
    }

    static ArrayList<Integer> mergeSort(ArrayList<Integer> a) {

        int middle = (int) Math.floor(a.size()) / 2;
        if (a.size() == 1) {
            return a;
        } else {

            ArrayList<Integer> x = new ArrayList<Integer>();
            ArrayList<Integer> y = new ArrayList<Integer>();
            for (int i = 0; i < middle; i++) {
                x.add(a.get(i));
            }

            for (int j = middle; j < a.size(); j++) {
                y.add(a.get(j));
            }

            return merge(mergeSort(x), mergeSort(y));
        }
    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        ArrayList<Integer> arr = new ArrayList<Integer>();

        int val = 1;
        // Users input test here.
        while (val != 0) {
            System.out.print("Enter the next value: ");
            val = input.nextInt();
            if (val != 0) {
                arr.add(val);
            }
        }
        input.close();
        ArrayList<Integer> sorted = mergeSort(arr);
        System.out.println(sorted);
    }
}
