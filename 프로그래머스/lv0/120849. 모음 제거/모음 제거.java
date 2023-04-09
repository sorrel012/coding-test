class Solution {
    public String solution(String my_string) {
        String answer = "";
        
        for(int i = 0; i < my_string.length(); i++) {
            Character myChar = my_string.charAt(i);
            if(myChar != 'a' && myChar != 'e' && myChar != 'i' && myChar != 'o' && myChar != 'u') {
                answer += myChar;
            }
        }
        
        return answer;
    }
}