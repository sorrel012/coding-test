class Solution {
    public int solution(int[] sides) {
        
        for(int i = 0; i < 2; i++) {
            if(sides[i] > sides[i+1]) {
            	int tmp = sides[i];
            	sides[i] = sides[i+1];
            	sides[i+1] = tmp;
            }
        }
        
        int answer = 2;
        
        if(sides[0] + sides[1] > sides[2]) {
            answer = 1;
        }   
        
        return answer;
    }
}