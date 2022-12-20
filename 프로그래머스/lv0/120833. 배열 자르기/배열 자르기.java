import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int[] numbers, int num1, int num2) {
        List<Integer> number = new ArrayList<>();
        
        for(int i = num1; i <= num2; i++) {
            number.add(numbers[i]);
        }
        
        int[] answer = new int[number.size()];
            
        for(int i = 0; i < number.size(); i++) {
            answer[i] = number.get(i);
        }
        
        return answer;
    }
}