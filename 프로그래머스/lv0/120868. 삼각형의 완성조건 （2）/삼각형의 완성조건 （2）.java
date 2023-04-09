import java.util.Arrays;
import java.util.stream.IntStream;

class Solution {
    public int solution(int[] sides) {
        int answer = 0;
		
		Arrays.sort(sides);
		
		answer += IntStream.rangeClosed(sides[1]-sides[0]+1, sides[1]).count();
		answer += IntStream.rangeClosed(sides[1]+1, sides[1]+sides[0]-1).count();
		
        return answer;
    }
}