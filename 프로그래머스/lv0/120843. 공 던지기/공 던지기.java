class Solution {
    public int solution(int[] numbers, int k) {
        int answer = 0;
		int cnt = 0;
        
        for(int i=0; i<k*2; i=i+2) {
        	cnt += 1;
            if(i > numbers.length-1) {
            	i = i - numbers.length;
                answer = numbers[i];
            }
            else
                answer = numbers[i];
            
            if(cnt == k) 
            	break;          
         
        }
        
        return answer;
    }
}