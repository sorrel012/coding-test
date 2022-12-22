class Solution {
    public int solution(int n) {
        int answer = 1;
        int sqrt = (int)Math.sqrt(n);
        
        if(sqrt * sqrt != n) {
            answer = 2;
        }
        
        return answer;
    }
}