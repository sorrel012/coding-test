import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
  
  public static void main(String[] args) throws IOException {

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    int T = Integer.parseInt(st.nextToken());    

    for(int i = 0; i < T; i++) {

      st = new StringTokenizer(br.readLine());

      int H = Integer.parseInt(st.nextToken());
      int W = Integer.parseInt(st.nextToken());
      int N = Integer.parseInt(st.nextToken());

      int Y = N%H == 0 ? H : N%H;      
      int X = N%H == 0 ? N/H : (N/H) + 1;

      System.out.printf("%d%02d\n", Y, X);

    }


  }
}