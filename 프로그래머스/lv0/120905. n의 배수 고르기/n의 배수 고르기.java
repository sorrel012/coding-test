import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int n, int[] numlist) {
        List<Integer> number = new ArrayList<>();
        
        for (int i : numlist) {
            if(i % n == 0) {
                number.add(i);
            }
        }
        
        int[] answer = new int[number.size()];
        
        for (int i = 0; i < number.size(); i++) {
            answer[i] = number.get(i);
        }
        
        return answer;
    }
}