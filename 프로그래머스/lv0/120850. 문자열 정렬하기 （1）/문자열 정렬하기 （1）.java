import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(String my_string) {
        List<Integer> number = new ArrayList<>();
        
        for(int i = 0; i < my_string.length(); i++) {
            if(Character.isDigit(my_string.charAt(i))) {
                number.add(my_string.charAt(i) - '0');
            }
        }
        
        int[] answer = new int[number.size()];
        
        for(int i = 0; i < number.size(); i++) {
            answer[i] = number.get(i);
        }
        
        Arrays.sort(answer);
        
        return answer;
    }
}