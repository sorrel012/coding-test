class Solution {
    public int solution(String before, String after) {
        int answer = 1;
        
        for(int i = 0; i < before.length(); i++) {
            char ch = before.charAt(i);
            if(before.chars().filter(c -> c == ch).count() != 
              after.chars().filter(c -> c == ch).count()) {
                answer = 0;
            }
        }
        
        return answer;
    }
}