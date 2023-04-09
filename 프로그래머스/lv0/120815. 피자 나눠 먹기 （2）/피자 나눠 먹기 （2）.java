class Solution {
    public int solution(int n) {
        int answer = n*6 / getGCD(n, 6) / 6;
        
        return answer;
    }
    
    public static int getGCD(int num1, int num2) {
        if (num1%num2 == 0) {
            return num2;
        }
        return getGCD(num2, num1%num2);
    }    
}