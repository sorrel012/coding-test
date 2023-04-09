import java.lang.Math;

class Solution {
    public int solution(int[] array, int n) {
        int answer = array[0];
        int index = 0;
        
        for(int i = 0; i < array.length; i++) {
            if(Math.abs(array[i] - (double)n) < Math.abs(answer - (double)n)) {
                answer = array[i];
                index = i;
            } else if(Math.abs(array[i] - (double)n) == Math.abs(answer - (double)n)) {
                answer = (array[i] > array[index]) ? array[index] : array[i];
            }
        }   
        
        return answer;
    }
}