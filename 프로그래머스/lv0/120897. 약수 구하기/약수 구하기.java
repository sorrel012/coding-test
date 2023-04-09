import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int n) {
        List<Integer> divisor = new ArrayList<>();
        
        for(int i=1; i<=n; i++) {
            if(n%i == 0) {
                divisor.add(i);
            }
        }
        
        return divisor.stream().mapToInt(x -> x).toArray();
    }
}