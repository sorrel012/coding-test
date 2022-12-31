import java.util.Arrays;

class Solution {
    public int solution(String before, String after) {
        int answer = 0;
        
        char[] b = before.toCharArray();
        char[] a = after.toCharArray();
        
        Arrays.sort(b);
        Arrays.sort(a);
    
        if(new String(a).equals(new String(b))) {
            answer = 1;
        }
        
        return answer;
    }
}