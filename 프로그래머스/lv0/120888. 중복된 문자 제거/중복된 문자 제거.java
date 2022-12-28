import java.util.ArrayList;
import java.util.List;

class Solution {
    public String solution(String my_string) {
        String answer = "";
        
        List<Character> myStr = new ArrayList<>();
        
        for(int i=0; i<my_string.length(); i++) {
            if(!myStr.contains(my_string.charAt(i))) {
                myStr.add(my_string.charAt(i));
            }           
        }
        
        for(int i=0; i<myStr.size(); i++) {
            answer += myStr.get(i);
        }
        
        return answer;
    }
}