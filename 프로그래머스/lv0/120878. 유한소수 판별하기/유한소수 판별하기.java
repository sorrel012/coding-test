import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int solution(int a, int b) {
        
        int answer = 1;

		BigInteger numerator = BigInteger.valueOf(a);
		BigInteger denominator = BigInteger.valueOf(b);
		BigInteger gcd_ = numerator.gcd(denominator);

		int gcd = gcd_.intValue();

		int newB = b / gcd;


		while (newB != 1)
			if (newB % 2 == 0)
				newB /= 2;
			else if (newB % 5 == 0)
				newB /= 5;
			else {
				answer = 2;
				break;
			}
        
        return answer;
    }
}