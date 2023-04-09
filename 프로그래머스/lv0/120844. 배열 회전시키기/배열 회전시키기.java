import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import static java.util.Collections.*;

class Solution {
    public int[] solution(int[] numbers, String direction) {
         List<Integer> numberList = new ArrayList<>();
        
        for(int i : numbers) { numberList.add(i); }
        
        if(direction.equals("right")) {
            rotate(numberList , 1);
        } else {
            rotate(numberList , -1);
        }
        
        return numberList.stream().mapToInt(x -> x).toArray();
    }
}