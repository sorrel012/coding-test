class Solution {
    public int solution(int i, int j, int k) {
        int answer = 0;
        
        for(int x=i; x<=j; x++) {
            answer += String.valueOf(x).chars()
                        .filter(c -> c == k+'0')
                        .count();
        }
        
        return answer;
    }
}