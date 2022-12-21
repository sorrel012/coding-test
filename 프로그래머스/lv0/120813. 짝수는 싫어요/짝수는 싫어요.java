import java.util.ArrayList;
import java.util.List;
import java.util.stream.*;

class Solution {
    public int[] solution(int n) {
        List<Integer> odd = new ArrayList<>();
        
        for(int i = 1; i <= n; i++) {
            if(i % 2 == 1) {
                odd.add(i);
            }
        }
        
        int[] answer = odd.stream().mapToInt(i->i).toArray();
            
        return answer;
    }
}