import java.util.ArrayList;
import java.util.List;

class Solution {
    public long solution(String s) {
        String[] numArr = s.split(" ");
		List<Integer> number = new ArrayList<>();
		
		for(int i=0; i<numArr.length; i++) {
			if(!numArr[i].equals(" ") && !numArr[i].equals("Z"))
				number.add(Integer.valueOf(numArr[i]));
			if(numArr[i].equals("Z")) {
				number.remove(number.size()-1);
			}			 
		}
                
        return number.stream()
                .mapToInt(Integer::intValue)
                .summaryStatistics().getSum();
    }
}