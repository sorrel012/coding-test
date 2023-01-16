import static java.util.Collections.rotate;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public int solution(String A, String B) {
       List<Character> stringA = new ArrayList<>();
		List<Character> stringB = new ArrayList<>();

		for (int i = 0; i < A.length(); i++) {
			stringA.add(A.charAt(i));
			stringB.add(B.charAt(i));
		}

		int answer = -1;

		if (stringA.equals(stringB))
			answer = 0;

		for (int i = 0; i < stringA.size() - 1; i++) {
			rotate(stringA, 1);
			System.out.println("stringA = " + stringA);
			if (stringA.equals(stringB)) {
				answer = i + 1;
				break;
			}
		}
        
        return answer;
    }
}