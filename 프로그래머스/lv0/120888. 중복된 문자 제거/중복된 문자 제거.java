import java.util.ArrayList;
import java.util.List;

class Solution {
    public String solution(String my_string) {
        
        List<String> myStr = new ArrayList<>();
        
        for(int i=0; i<my_string.length(); i++) {
            if(!myStr.contains(my_string.charAt(i)+"")) {
                myStr.add(my_string.charAt(i)+"");
            }           
        }
        
        
        return String.join("", myStr);
    }
}