class Solution {
    public String solution(String word) {
        String answer = "";
        
        for(int i=0; i < word.length(); i++) { 
            if ((int)word.charAt(i) > 96) { 
                answer += (char)((int)word.charAt(i) - 32);
            } else {
                answer += (char)((int)word.charAt(i) + 32);
            } 
        }
        
        return answer;
    }
}