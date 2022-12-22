class Solution {
    public int solution(int n) {
        int answer = 0;
        String number = n + "";
        int length = number.length();
        
        for(int i = length -1 ; i >= 1; i--) {
        	answer += n/(int)Math.pow(10, i);
            n -= (n/(int)Math.pow(10, i)) * ((int)Math.pow(10, i));
        }
        
        answer += n;
        
        return answer;
    }
}