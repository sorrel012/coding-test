import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int n, int k) {
      
      List<Integer> tmp = new ArrayList<Integer>();
      
      for (int i=k; i<=n; i+=k) {
        tmp.add(i);
      }
      
      int[] answer = tmp.stream().mapToInt(x -> x).toArray();
      
      return answer;
    }
}