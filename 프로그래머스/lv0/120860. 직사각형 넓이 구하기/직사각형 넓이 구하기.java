import java.util.ArrayList;
import java.util.List;

class Solution {
    public int solution(int[][] dots) {
        List<Integer> x = new ArrayList<>();
		List<Integer> y = new ArrayList<>();

		for (int[] element : dots) {
			if (!x.contains(element[0]))
				x.add(element[0]);
			if (!y.contains(element[1]))
				y.add(element[1]);
		}
        return Math.abs(x.get(0) - x.get(1)) * Math.abs(y.get(0) - y.get(1));
    }
}