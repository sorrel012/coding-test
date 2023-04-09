import java.util.Arrays;
import java.util.List;

class Solution {
    public String solution(String letter) {
        String[] morseCode = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..",
                              "--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--",
                              "--.."}; 
        
        List<String> morseCodeList = Arrays.asList(morseCode);       
        String[] letterStr = letter.split(" ");
            
        String answer = "";
        
        for(int i=0; i<letterStr.length; i++) {
            answer += ( (char)(morseCodeList.indexOf((letterStr[i])) + 97) + "");
        }
           
        return answer;
    }
}