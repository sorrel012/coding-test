class Solution {
    public int solution(int num, int k) {        
        String number = String.valueOf(num);        
        int answer = 0;
        
        if(number.indexOf((k+'0')) == -1) {
            answer = -1;
        } else {
            answer = number.indexOf((k+'0')) + 1;
        }
                
        return answer;
    }
}