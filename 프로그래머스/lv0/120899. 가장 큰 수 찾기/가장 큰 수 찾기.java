import java.util.Arrays;

class Solution {
    public int[] solution(int[] array) {
        
        int[] array2 = Arrays.copyOf(array, array.length);
        
        Arrays.sort(array);
        
        int count = 0;
        
        for(int i : array2) {
            if(i == array[array.length-1]) {
                break;
            }
            count += 1;
        }      
        
        int[] answer = {array[array.length-1], count};
        
        return answer;
    }
}