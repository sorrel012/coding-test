import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int n) {
        List<Integer> prime = new ArrayList<>();
        for(int i=2; i<=n; i++) {
            while(n % i == 0){
                if(prime.contains(i) == false) 
                    prime.add(i);   
                n /= i;
            }             
            
        }
        
        return prime.stream().mapToInt(x -> x).toArray(); 
    }
}