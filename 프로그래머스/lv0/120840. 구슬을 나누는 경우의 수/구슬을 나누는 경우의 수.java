import java.math.BigInteger;

class Solution {
    public BigInteger solution(int balls, int share) {
        return factorial(balls).divide(factorial(balls - share).multiply(factorial(share)));
    }
    
    public static BigInteger factorial(int num) {
        BigInteger fac = new BigInteger("1");
        
        for(int i = num; i >= 2; i--) {
        	BigInteger num_ = new BigInteger(String.valueOf(i));
            fac = fac.multiply(num_);
        }
        return fac;
    }
}