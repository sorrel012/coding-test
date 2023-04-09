import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

class Solution {
    public int[] solution(int[] emergency) {
        List<Integer> emergencyList = new ArrayList<>();
        for(int i=0; i<emergency.length; i++) {
        	emergencyList.add(emergency[i]);
        }
        
        List<Integer> emergencySortList = new ArrayList<>();
        for(int i=0; i<emergency.length; i++) {
        	emergencySortList.add(emergency[i]);
        }
        
        Collections.sort(emergencySortList, Collections.reverseOrder());
        
        int[] answer = new int[emergency.length];
        for(int i=0; i<emergency.length; i++) {
            answer[i] = emergencySortList.indexOf(emergencyList.get(i)) + 1;
        } 
        
        return answer;
    }
}