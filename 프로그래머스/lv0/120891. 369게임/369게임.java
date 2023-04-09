import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

class Solution {
    public int solution(int order) {
        int answer = 0;
        String number = String.valueOf(order);
        List<Character> numList = new ArrayList<>();
        
        for(int i=0; i<number.length(); i++) {
            numList.add(number.charAt(i));
        }
        
        answer = Collections.frequency(numList, '3') + Collections.frequency(numList, '6') 
            + Collections.frequency(numList, '9');
        
        return answer;
    }
}