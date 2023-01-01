import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

class Solution {
    public String solution(String s) {
        String answer = "";
        
        List<Character> once = new ArrayList<>();
        
        for(int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if(s.chars().filter(c -> c == ch).count() == 1) {
                once.add(ch);
            }
        }
        
        Collections.sort(once);
        
        for(int i=0; i<once.size(); i++) {
            answer += once.get(i);
        }        
        
        return answer;
    }
}