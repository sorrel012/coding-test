import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine());
    HashSet<Integer> A = new HashSet<Integer>();

    StringTokenizer st = new StringTokenizer(br.readLine());
    while(st.hasMoreTokens()) {
      A.add(Integer.parseInt(st.nextToken()));
    }

    int M = Integer.parseInt(br.readLine());

    st = new StringTokenizer(br.readLine());
    while(st.hasMoreTokens()) {
      int num = Integer.parseInt(st.nextToken());

      if(A.contains(num)) {
        System.out.println(1);
      } else {
        System.out.println(0);
      }
    }
  } // main
}
