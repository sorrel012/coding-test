import java.util.stream.Collectors;
import java.util.stream.Stream;

class Solution {
    public String solution(String my_string) {        
        my_string = my_string.toLowerCase();
        
        String answer = Stream.of(my_string.split(""))
                    .sorted()
                    .collect(Collectors.joining());
        return answer;
    }
}