import java.util.ArrayList;
import java.util.List;

class Solution {
    public String[] solution(String my_str, int n) {
        List<String> subStr = new ArrayList<>();
	
		for(int i=0; i<my_str.length()/n; i++) {
			subStr.add(my_str.substring(i*n, i*n+n));            
        }
        
        
        if(my_str.length() % n != 0) {
        	subStr.add(my_str.substring(n * (my_str.length()/n), my_str.length()));
        }
        
        String[] answer = new String[subStr.size()];
        
        answer = subStr.stream().map(s -> s).toArray(String[]::new);
        
        return answer;
    }
}