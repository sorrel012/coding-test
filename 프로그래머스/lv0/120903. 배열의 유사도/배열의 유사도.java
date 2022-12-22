import java.util.Arrays;

class Solution {
    public int solution(String[] s1, String[] s2) {
        int answer = 0;
        
        for(int i = 0; i < s1.length; i++) {
            if (Arrays.stream(s2).anyMatch(s1[i]::equals)) {
                answer += 1;
            }
        }
        
        return answer;
    }
}